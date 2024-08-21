import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  blogPosts?: BlogPostListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
