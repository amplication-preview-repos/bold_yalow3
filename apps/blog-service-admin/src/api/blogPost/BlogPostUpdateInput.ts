import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  publishedAt?: Date | null;
  title?: string | null;
  author?: string | null;
  blogService?: string | null;
  content?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
};
