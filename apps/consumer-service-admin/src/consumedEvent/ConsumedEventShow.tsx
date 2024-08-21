import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const ConsumedEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventPayload" source="eventPayload" />
        <TextField label="ID" source="id" />
        <BooleanField label="processed" source="processed" />
        <TextField label="processedAt" source="processedAt" />
        <TextField label="testField" source="testField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
