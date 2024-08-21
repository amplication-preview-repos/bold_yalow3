import { Module } from "@nestjs/common";
import { CategoryModuleBase } from "./base/category.module.base";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { CategoryGrpcController } from "./category.grpc.controller";
import { CategoryResolver } from "./category.resolver";

@Module({
  imports: [CategoryModuleBase],
  controllers: [CategoryController, CategoryGrpcController],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
