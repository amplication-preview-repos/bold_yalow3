import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ConsumedEventWhereInput = {
  id?: StringFilter;
  processed?: BooleanNullableFilter;
  processedAt?: DateTimeNullableFilter;
  eventPayload?: JsonFilter;
  testField?: JsonFilter;
};
