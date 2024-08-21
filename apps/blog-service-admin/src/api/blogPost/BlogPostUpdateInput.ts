import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  author?: string | null;
  blogService?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
