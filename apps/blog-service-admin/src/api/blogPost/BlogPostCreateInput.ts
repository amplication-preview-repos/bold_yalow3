import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  publishedAt?: Date | null;
  title?: string | null;
  author?: string | null;
  blogService?: string | null;
  content?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
};
