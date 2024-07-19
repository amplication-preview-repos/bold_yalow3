import { InputJsonValue } from "../../types";

export type ConsumedEventUpdateInput = {
  processed?: boolean | null;
  processedAt?: Date | null;
  eventPayload?: InputJsonValue;
  testField?: InputJsonValue;
};
