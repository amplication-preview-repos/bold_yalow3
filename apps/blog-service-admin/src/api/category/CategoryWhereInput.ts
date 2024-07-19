import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  blogPosts?: BlogPostListRelationFilter;
};
