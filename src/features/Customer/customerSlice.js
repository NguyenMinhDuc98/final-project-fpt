import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const customer = createSlice({
    name: 'customer',
    initialState: {
        list: [],
        isLoading: false,
        message: null,
    },
    reducers: {
        customerRequestStart: (state, action) => {
            state.isLoading = true;
        },
        customerReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
                state.isLoading = false;
            };
        },
        customerRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        activeCustomerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
                state.isLoading = false;
            };
            alert('Active customer successful');
        },
        deactivateCustomerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
                state.isLoading = false;
            };
            alert('Deactivate customer successful');
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

export const activeCustomer = (props) => apiCallBegan({
    url: '/api/admin/activeUser',
    headers: {
        Authorization: props.token
    },
    data: {
        user_id: props.id,
        role_id: 3
    },
    method: "POST",
    onSuccess: activeCustomerSuccessful.type,
    onError: customerRequestFailed.type,
});

export const deactivateCustomer = (props) => apiCallBegan({
    url: '/api/admin/deactiveUser',
    headers: {
        Authorization: props.token
    },
    data: {
        user_id: props.id,
        role_id: 3
    },
    method: "POST",
    onSuccess: activeCustomerSuccessful.type,
    onError: customerRequestFailed.type,
});

const { reducer, actions } = customer;
export const { customerReceived, customerRequestFailed, customerRequestStart,
    activeCustomerSuccessful, deactivateCustomerSuccessful
} = actions;
export default reducer;