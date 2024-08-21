import { BlogPost } from "../blogPost/BlogPost";

export type Category = {
  blogPosts?: Array<BlogPost>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
