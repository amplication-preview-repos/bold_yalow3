import { BlogPost } from "../blogPost/BlogPost";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  blogPosts?: Array<BlogPost>;
};
