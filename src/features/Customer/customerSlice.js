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
        editCustomerSuccessful:(state,action)=>{
            state.message = 'success';
            state.isLoading = false;
        },
        activeCustomerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
                state.isLoading = false;
            };
            alert('Active customer successful');
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

// export const activeCustomer = (props) => apiCallBegan({
//     url: '/api/admin/activeCustomer',
//     headers: {
//         Authorization: props.token
//     },
//     data: {
//         id: props.id
//     },
//     method: "POST",
//     onSuccess: activeCustomerSuccessful.type,
//     onError: serviceRequestFailed.type,
//     onStart: customerRequestStart.type
// });

const { reducer, actions } = customer;
export const { customerReceived, customerRequestFailed, customerRequestStart,
    activeCustomerSuccessful, editCustomerSuccessful
} = actions;
export default reducer;