import { Module } from "@nestjs/common";
import { BlogPostModuleBase } from "./base/blogPost.module.base";
import { BlogPostService } from "./blogPost.service";
import { BlogPostController } from "./blogPost.controller";
import { BlogPostGrpcController } from "./blogPost.grpc.controller";
import { BlogPostResolver } from "./blogPost.resolver";

@Module({
  imports: [BlogPostModuleBase],
  controllers: [BlogPostController, BlogPostGrpcController],
  providers: [BlogPostService, BlogPostResolver],
  exports: [BlogPostService],
})
export class BlogPostModule {}
