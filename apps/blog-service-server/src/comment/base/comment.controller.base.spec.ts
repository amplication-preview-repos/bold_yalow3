import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CommentController } from "../comment.controller";
import { CommentService } from "../comment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  text: "exampleText",
  author: "exampleAuthor",
  commentedAt: new Date(),
  commentText: "exampleCommentText",
  commentAuthor: "exampleCommentAuthor",
  contentText: "exampleContentText",
  commentator: "exampleCommentator",
  dateCommented: new Date(),
  relatedPost: "exampleRelatedPost",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  text: "exampleText",
  author: "exampleAuthor",
  commentedAt: new Date(),
  commentText: "exampleCommentText",
  commentAuthor: "exampleCommentAuthor",
  contentText: "exampleContentText",
  commentator: "exampleCommentator",
  dateCommented: new Date(),
  relatedPost: "exampleRelatedPost",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "exampleText",
    author: "exampleAuthor",
    commentedAt: new Date(),
    commentText: "exampleCommentText",
    commentAuthor: "exampleCommentAuthor",
    contentText: "exampleContentText",
    commentator: "exampleCommentator",
    dateCommented: new Date(),
    relatedPost: "exampleRelatedPost",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  text: "exampleText",
  author: "exampleAuthor",
  commentedAt: new Date(),
  commentText: "exampleCommentText",
  commentAuthor: "exampleCommentAuthor",
  contentText: "exampleContentText",
  commentator: "exampleCommentator",
  dateCommented: new Date(),
  relatedPost: "exampleRelatedPost",
};

const service = {
  createComment() {
    return CREATE_RESULT;
  },
  comments: () => FIND_MANY_RESULT,
  comment: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Comment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CommentService,
          useValue: service,
        },
      ],
      controllers: [CommentController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /comments", async () => {
    await request(app.getHttpServer())
      .post("/comments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        commentedAt: CREATE_RESULT.commentedAt.toISOString(),
        dateCommented: CREATE_RESULT.dateCommented.toISOString(),
      });
  });

  test("GET /comments", async () => {
    await request(app.getHttpServer())
      .get("/comments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          commentedAt: FIND_MANY_RESULT[0].commentedAt.toISOString(),
          dateCommented: FIND_MANY_RESULT[0].dateCommented.toISOString(),
        },
      ]);
  });

  test("GET /comments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /comments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        commentedAt: FIND_ONE_RESULT.commentedAt.toISOString(),
        dateCommented: FIND_ONE_RESULT.dateCommented.toISOString(),
      });
  });

  test("POST /comments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/comments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        commentedAt: CREATE_RESULT.commentedAt.toISOString(),
        dateCommented: CREATE_RESULT.dateCommented.toISOString(),
      })
      .then(function () {
        agent
          .post("/comments")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
