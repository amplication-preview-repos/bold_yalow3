import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  commentAuthor?: string | null;
  commentText?: string | null;
  commentator?: string | null;
  commentedAt?: Date | null;
  contentText?: string | null;
  dateCommented?: Date | null;
  relatedPost?: string | null;
  text?: string | null;
};
