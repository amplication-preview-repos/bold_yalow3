import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const BlogPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="title" source="title" />
        <TextInput label="author" source="author" />
        <TextInput label="BlogService" source="blogService" />
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
