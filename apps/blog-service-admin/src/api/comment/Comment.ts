import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  author: string | null;
  blogPost?: BlogPost | null;
  commentAuthor: string | null;
  commentText: string | null;
  commentator: string | null;
  commentedAt: Date | null;
  contentText: string | null;
  createdAt: Date;
  dateCommented: Date | null;
  id: string;
  relatedPost: string | null;
  text: string | null;
  updatedAt: Date;
};
