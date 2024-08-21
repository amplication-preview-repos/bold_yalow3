import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const ConsumedEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <BooleanInput label="processed" source="processed" />
        <DateTimeInput label="processedAt" source="processedAt" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
