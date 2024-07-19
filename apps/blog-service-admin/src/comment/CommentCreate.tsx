import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" multiline source="text" />
        <TextInput label="author" source="author" />
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="BlogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
        <DateTimeInput label="commentedAt" source="commentedAt" />
        <TextInput label="commentText" multiline source="commentText" />
        <TextInput label="commentAuthor" source="commentAuthor" />
        <TextInput label="contentText" multiline source="contentText" />
        <TextInput label="commentator" source="commentator" />
        <DateTimeInput label="dateCommented" source="dateCommented" />
        <TextInput label="relatedPost" source="relatedPost" />
      </SimpleForm>
    </Create>
  );
};
