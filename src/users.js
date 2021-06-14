import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    ArrayInput,
    Edit,
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { HobbiesCustomIterator } from "./CustomIterators";

const UsersTitle = ({ record }) => {
    return <span>Users {record ? `"${record.name}"` : ''}</span>
}

export const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="occupation" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UsersEdit = props => (
    <Edit title={<UsersTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="occupation" />
            <TextInput source="address.streetAddress" />
            <TextInput source="address.apt" />
            <TextInput source="address.city" />
            <TextInput source="address.state" />
            <TextInput source="address.zipcode" />
            <ArrayInput source="hobbies">
                <HobbiesCustomIterator />
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const UsersCreate = props => (
    <Create {...props}>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="occupation" />
        <TextInput source="address.streetAddress" />
        <TextInput source="address.apt" />
        <TextInput source="address.city" />
        <TextInput source="address.state" />
        <TextInput source="address.zipcode" />
        <ArrayInput source="hobbies">
            <HobbiesCustomIterator />
        </ArrayInput>
    </Create>
);