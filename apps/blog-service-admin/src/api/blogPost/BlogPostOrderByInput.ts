import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
  author?: SortOrder;
  blogService?: SortOrder;
  content?: SortOrder;
  categoryId?: SortOrder;
};
