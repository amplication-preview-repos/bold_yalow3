import { BlogPostUpdateManyWithoutCategoriesInput } from "./BlogPostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  blogPosts?: BlogPostUpdateManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
