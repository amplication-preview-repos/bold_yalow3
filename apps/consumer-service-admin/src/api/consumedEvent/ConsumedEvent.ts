import { JsonValue } from "type-fest";

export type ConsumedEvent = {
  createdAt: Date;
  eventPayload: JsonValue;
  id: string;
  processed: boolean | null;
  processedAt: Date | null;
  testField: JsonValue;
  updatedAt: Date;
};
