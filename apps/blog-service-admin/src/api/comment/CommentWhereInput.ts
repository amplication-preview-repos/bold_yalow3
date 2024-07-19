import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  author?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
  commentedAt?: DateTimeNullableFilter;
  commentText?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  contentText?: StringNullableFilter;
  commentator?: StringNullableFilter;
  dateCommented?: DateTimeNullableFilter;
  relatedPost?: StringNullableFilter;
};
