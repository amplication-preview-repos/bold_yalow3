import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  blogService?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
