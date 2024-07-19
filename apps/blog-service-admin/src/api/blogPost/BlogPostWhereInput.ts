import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type BlogPostWhereInput = {
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  author?: StringNullableFilter;
  blogService?: StringNullableFilter;
  content?: StringNullableFilter;
  comments?: CommentListRelationFilter;
};
