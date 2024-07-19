import { Comment } from "../comment/Comment";

export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  title: string | null;
  author: string | null;
  blogService: string | null;
  content: string | null;
  comments?: Array<Comment>;
};
