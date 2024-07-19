import { Comment } from "../comment/Comment";
import { Category } from "../category/Category";

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
  category?: Category | null;
};
