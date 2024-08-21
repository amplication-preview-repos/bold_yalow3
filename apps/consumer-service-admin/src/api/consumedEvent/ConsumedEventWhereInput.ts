import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ConsumedEventWhereInput = {
  eventPayload?: JsonFilter;
  id?: StringFilter;
  processed?: BooleanNullableFilter;
  processedAt?: DateTimeNullableFilter;
  testField?: JsonFilter;
};
