import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
  commentAuthor?: StringNullableFilter;
  commentText?: StringNullableFilter;
  commentator?: StringNullableFilter;
  commentedAt?: DateTimeNullableFilter;
  contentText?: StringNullableFilter;
  dateCommented?: DateTimeNullableFilter;
  id?: StringFilter;
  relatedPost?: StringNullableFilter;
  text?: StringNullableFilter;
};
