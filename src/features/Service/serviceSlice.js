import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const service = createSlice({
    name: 'service',
    initialState: {
        list: []
    },
    reducers: {
        serviceRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        serviceReceived: (state, action) => {
            if (action.payload != undefined) state.list = action.payload;
            console.log('success: ', action);
        },
        serviceRequeFailed: (state, action) => {
            console.log('failed: ', action);
        }
    }
});

export const getListService = (props) => apiCallBegan({
    url: 'api/getMajor',
    headers:{
        Authorization: props
    },
    onSuccess: serviceReceived.type,
    onError: serviceRequeFailed.type,
    onStart: serviceRequestStart.type
});

const { reducer, actions } = service;
export const { serviceReceived, serviceRequeFailed, serviceRequestStart } = actions;
export default reducer;