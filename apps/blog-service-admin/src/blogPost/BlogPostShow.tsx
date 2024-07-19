import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BLOGPOST_TITLE_FIELD } from "./BlogPostTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="publishedAt" source="publishedAt" />
        <TextField label="title" source="title" />
        <TextField label="author" source="author" />
        <TextField label="BlogService" source="blogService" />
        <TextField label="content" source="content" />
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Comment"
          target="blogPostId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="text" source="text" />
            <TextField label="author" source="author" />
            <ReferenceField
              label="BlogPost"
              source="blogpost.id"
              reference="BlogPost"
            >
              <TextField source={BLOGPOST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="commentedAt" source="commentedAt" />
            <TextField label="commentText" source="commentText" />
            <TextField label="commentAuthor" source="commentAuthor" />
            <TextField label="contentText" source="contentText" />
            <TextField label="commentator" source="commentator" />
            <TextField label="dateCommented" source="dateCommented" />
            <TextField label="relatedPost" source="relatedPost" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
