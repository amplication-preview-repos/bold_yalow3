import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";

export type BlogPost = {
  author: string | null;
  blogService: string | null;
  category?: Category | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
