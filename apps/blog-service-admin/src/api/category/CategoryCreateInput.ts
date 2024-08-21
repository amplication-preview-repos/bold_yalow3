import { BlogPostCreateNestedManyWithoutCategoriesInput } from "./BlogPostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  blogPosts?: BlogPostCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
