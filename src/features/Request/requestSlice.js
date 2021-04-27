import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const request = createSlice({
    name: 'request',
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {
        requestRequestStart: (state, action) => {
            state.isLoading = true;
            console.log('start: ', action);
        },
        requestReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
            };
        },
        requestRequestFailed: (state, action) => {
            state.isLoading = false;
            console.log('failed: ', action);
        },
    }
});

export const getListRequest = (props) => apiCallBegan({
    url: '/api/admin/getAllRequest',
    headers: {
        Authorization: props
    },
    method: 'POST',
    onSuccess: requestReceived.type,
    onError: requestRequestFailed.type,
    onStart: requestRequestStart.type
});

const { reducer, actions } = request;
export const { requestReceived, requestRequestFailed, requestRequestStart } = actions;
export default reducer;