import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  creator?: StringNullableFilter;
  id?: StringFilter;
};
