import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type BlogPostCreateInput = {
  publishedAt?: Date | null;
  title?: string | null;
  author?: string | null;
  blogService?: string | null;
  content?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
  category?: CategoryWhereUniqueInput | null;
};
