import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  text?: string | null;
  author?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
  commentedAt?: Date | null;
  commentText?: string | null;
  commentAuthor?: string | null;
  contentText?: string | null;
  commentator?: string | null;
  dateCommented?: Date | null;
  relatedPost?: string | null;
};
