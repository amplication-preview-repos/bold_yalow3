import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogPostService } from "./blogPost.service";
import { BlogPostGrpcControllerBase } from "./base/blogPost.grpc.controller.base";

@swagger.ApiTags("blogPosts")
@common.Controller("blogPosts")
export class BlogPostGrpcController extends BlogPostGrpcControllerBase {
  constructor(protected readonly service: BlogPostService) {
    super(service);
  }
}
