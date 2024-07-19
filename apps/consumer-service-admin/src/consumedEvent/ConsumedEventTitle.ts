import { ConsumedEvent as TConsumedEvent } from "../api/consumedEvent/ConsumedEvent";

export const CONSUMEDEVENT_TITLE_FIELD = "id";

export const ConsumedEventTitle = (record: TConsumedEvent): string => {
  return record.id?.toString() || String(record.id);
};
