import { BlogPostUpdateManyWithoutCategoriesInput } from "./BlogPostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  blogPosts?: BlogPostUpdateManyWithoutCategoriesInput;
};
