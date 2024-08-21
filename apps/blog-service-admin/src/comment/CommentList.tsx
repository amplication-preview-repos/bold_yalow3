import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BLOGPOST_TITLE_FIELD } from "../blogPost/BlogPostTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="author" source="author" />
        <ReferenceField
          label="BlogPost"
          source="blogpost.id"
          reference="BlogPost"
        >
          <TextField source={BLOGPOST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="commentAuthor" source="commentAuthor" />
        <TextField label="commentText" source="commentText" />
        <TextField label="commentator" source="commentator" />
        <TextField label="commentedAt" source="commentedAt" />
        <TextField label="contentText" source="contentText" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCommented" source="dateCommented" />
        <TextField label="ID" source="id" />
        <TextField label="relatedPost" source="relatedPost" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
