import { SortOrder } from "../../util/SortOrder";

export type ConsumedEventOrderByInput = {
  createdAt?: SortOrder;
  eventPayload?: SortOrder;
  id?: SortOrder;
  processed?: SortOrder;
  processedAt?: SortOrder;
  testField?: SortOrder;
  updatedAt?: SortOrder;
};
