import { InputJsonValue } from "../../types";

export type ConsumedEventCreateInput = {
  eventPayload?: InputJsonValue;
  processed?: boolean | null;
  processedAt?: Date | null;
  testField?: InputJsonValue;
};
