import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  creator?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
