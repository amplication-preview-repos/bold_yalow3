import { JsonValue } from "type-fest";

export type ConsumedEvent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  processed: boolean | null;
  processedAt: Date | null;
  eventPayload: JsonValue;
  testField: JsonValue;
};
