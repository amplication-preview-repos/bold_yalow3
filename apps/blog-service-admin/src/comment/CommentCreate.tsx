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
        <TextInput label="author" source="author" />
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="BlogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
        <TextInput label="commentAuthor" source="commentAuthor" />
        <TextInput label="commentText" multiline source="commentText" />
        <TextInput label="commentator" source="commentator" />
        <DateTimeInput label="commentedAt" source="commentedAt" />
        <TextInput label="contentText" multiline source="contentText" />
        <DateTimeInput label="dateCommented" source="dateCommented" />
        <TextInput label="relatedPost" source="relatedPost" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
