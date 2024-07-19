import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { BLOGPOST_TITLE_FIELD } from "../blogPost/BlogPostTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
