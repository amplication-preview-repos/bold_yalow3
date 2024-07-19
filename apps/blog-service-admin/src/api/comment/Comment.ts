import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  author: string | null;
  blogPost?: BlogPost | null;
  commentedAt: Date | null;
  commentText: string | null;
  commentAuthor: string | null;
  contentText: string | null;
  commentator: string | null;
  dateCommented: Date | null;
  relatedPost: string | null;
};
