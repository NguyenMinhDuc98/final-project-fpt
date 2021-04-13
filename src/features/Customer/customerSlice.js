import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const customer = createSlice({
    name: 'customer',
    initialState: {
        list: [],

    },
    reducers: {
        customerRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        customerReceived: (state, action) => {
            state.list = action.payload;

            console.log('start: ', action);
            console.log('payload: ', action.payload);
        },
        customerRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createCustomerSuccessful: (state, action) => {
            alert('Create customer successful');
        },
        editCustomerSuccessful: (state, action) => {
            alert('Edit customer successful');
        },
        deleteCustomerSuccessful: (state, action) => {
            alert('Delete customer successful');
            console.log('payload: ', action.payload);
        },
    }
});

export const getListCustomer = (props) => apiCallBegan({
    url: 'api/admin/getAllCus',
    headers: {
        Authorization: props
    },
    onSuccess: customerReceived.type,
    onError: customerRequestFailed.type,
    onStart: customerRequestStart.type
});

export const editCustomer = (props) => apiCallBegan({
    url: '/api/admin/updateCustomer',
    headers: {
        Authorization: props
    },
    data: {
        name: props.name,
        phone_number: props.phoneNumber,
        email: props.email,
        id: props.id,
        role_id: props.role_id
    },
    method: "POST",
    onSuccess: editCustomerSuccessful.type,
    onError: customerRequestFailed.type,
    onStart: customerRequestStart.type
});

export const deleteCustomer = (props) => apiCallBegan({
    url: '/api/admin/deleteCustomer',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deleteCustomerSuccessful.type,
    onError: customerRequestFailed.type,
    onStart: customerRequestStart.type
})

const { reducer, actions } = customer;
export const { customerReceived, customerRequestFailed, customerRequestStart, createCustomerSuccessful,
    editCustomerSuccessful, deleteCustomerSuccessful
} = actions;
export default reducer;