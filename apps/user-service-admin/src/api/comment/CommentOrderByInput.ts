import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  createdAt?: SortOrder;
  creator?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
