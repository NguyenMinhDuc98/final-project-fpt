import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const service = createSlice({
    name: 'service',
    initialState: {
        list: [],
    },
    reducers: {
        serviceRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        serviceReceived: (state, action) => {
            localStorage.setItem('serviceList', action.payload);

            state.list = action.payload;
        },
        serviceRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createServiceSuccessful: (state, action) => {
            alert('Create service successful');
        },
        editServiceSuccessful: (state, action) => {
            alert('Edit service successful');
        },
        deleteServiceSuccessful: (state, action) => {
            alert('Delete service successful');
            console.log('payload: ', action.payload);
        },
    }
});

export const createService = (props) => apiCallBegan({
    url: '/api/admin/createService',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        major_id: props.id
    },
    method: "POST",
    onSuccess: createServiceSuccessful.type,
    onError: serviceRequestFailed.type,
    onStart: serviceRequestStart.type
});

export const editService = (props) => apiCallBegan({
    url: '/api/admin/updateService',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        major_id: props.major_id,
        id: props.id
    },
    method: "POST",
    onSuccess: editServiceSuccessful.type,
    onError: serviceRequestFailed.type,
    onStart: serviceRequestStart.type
});

export const deleteService = (props) => apiCallBegan({
    url: '/api/admin/deleteService',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deleteServiceSuccessful.type,
    onError: serviceRequestFailed.type,
    onStart: serviceRequestStart.type
})

const { reducer, actions } = service;
export const { serviceReceived, serviceRequestFailed, serviceRequestStart, createServiceSuccessful, editServiceSuccessful,
    deleteServiceSuccessful
} = actions;
export default reducer;