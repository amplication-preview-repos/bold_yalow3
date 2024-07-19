import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type BlogPostUpdateInput = {
  publishedAt?: Date | null;
  title?: string | null;
  author?: string | null;
  blogService?: string | null;
  content?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  category?: CategoryWhereUniqueInput | null;
};
