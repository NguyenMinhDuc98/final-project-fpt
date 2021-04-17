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
            if (action.payload !== undefined) {
                state.list = action.payload;
                localStorage.setItem('services', action.payload);
            };
        },
        serviceRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createServiceSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
            };
            alert('Create service successful');
        },
        editServiceSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
            };
            alert('Edit service successful');
        },
        activeServiceSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            alert('Active service successful');
            console.log('payload: ', action.payload);
        },
        deActivateServiceSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            alert('Deactivate service successful');
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
        service_id: props.id
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
        service_id: props.service_id,
        id: props.id
    },
    method: "POST",
    onSuccess: editServiceSuccessful.type,
    onError: serviceRequestFailed.type,
    onStart: serviceRequestStart.type
});

export const activeService = (props) => apiCallBegan({
    url: '/api/admin/activeService',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: activeServiceSuccessful.type,
    onError: serviceRequestFailed.type,
    onStart: serviceRequestStart.type
});

export const deActivateService = (props) => apiCallBegan({
    url: '/api/admin/deactivateService',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id,
        major_id: props.major_id
    },
    method: "POST",
    onSuccess: deActivateServiceSuccessful.type,
    onError: serviceRequestFailed.type,
    onStart: serviceRequestStart.type
});

const { reducer, actions } = service;
export const { serviceReceived, serviceRequestFailed, serviceRequestStart, createServiceSuccessful, editServiceSuccessful,
    activeServiceSuccessful, deActivateServiceSuccessful
} = actions;
export default reducer;