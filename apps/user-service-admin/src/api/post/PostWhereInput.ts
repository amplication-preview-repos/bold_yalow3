import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  creator?: StringNullableFilter;
  id?: StringFilter;
};
