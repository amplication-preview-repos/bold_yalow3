import { InputJsonValue } from "../../types";

export type ConsumedEventCreateInput = {
  processed?: boolean | null;
  processedAt?: Date | null;
  eventPayload?: InputJsonValue;
  testField?: InputJsonValue;
};
