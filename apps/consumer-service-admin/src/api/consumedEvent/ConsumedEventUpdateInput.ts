import { InputJsonValue } from "../../types";

export type ConsumedEventUpdateInput = {
  eventPayload?: InputJsonValue;
  processed?: boolean | null;
  processedAt?: Date | null;
  testField?: InputJsonValue;
};
