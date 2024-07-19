import { BlogPostCreateNestedManyWithoutCategoriesInput } from "./BlogPostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  blogPosts?: BlogPostCreateNestedManyWithoutCategoriesInput;
};
