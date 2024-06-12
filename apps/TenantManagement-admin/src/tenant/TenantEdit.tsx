import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
