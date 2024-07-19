import { SortOrder } from "../../util/SortOrder";

export type ConsumedEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  processed?: SortOrder;
  processedAt?: SortOrder;
  eventPayload?: SortOrder;
  testField?: SortOrder;
};
