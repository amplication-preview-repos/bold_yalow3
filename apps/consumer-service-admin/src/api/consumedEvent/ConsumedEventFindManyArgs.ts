import { ConsumedEventWhereInput } from "./ConsumedEventWhereInput";
import { ConsumedEventOrderByInput } from "./ConsumedEventOrderByInput";

export type ConsumedEventFindManyArgs = {
  where?: ConsumedEventWhereInput;
  orderBy?: Array<ConsumedEventOrderByInput>;
  skip?: number;
  take?: number;
};
