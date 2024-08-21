import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  blogService?: SortOrder;
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
