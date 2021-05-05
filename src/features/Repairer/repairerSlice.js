import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const repairer = createSlice({
    name: 'repairer',
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {
        repairerRequestStart: (state, action) => {
            state.isLoading = true;
            console.log('start: ', action);
        },
        repairerReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
            };
        },
        repairerRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        activeRepairerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
            };
            alert('Active repairer successful');
            console.log('payload: ', action.payload);
        },
        deActivateRepairerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            alert('Deactivate repairer successful');
            console.log('payload: ', action.payload);
        },
    }
});

export const getListRepairer = (props) => apiCallBegan({
    url: '/api/admin/getAllRepairer',
    headers: {
        Authorization: props
    },
    onSuccess: repairerReceived.type,
    onError: repairerRequestFailed.type,
    onStart: repairerRequestStart.type
});

export const activeRepairer = (props) => apiCallBegan({
    url: '/api/admin/activeUser',
    headers: {
        Authorization: props.token
    },
    data: {
        user_id: props.user_id,
        role_id: 2
    },
    method: "POST",
    onSuccess: activeRepairerSuccessful.type,
    onError: repairerRequestFailed.type
});

export const deActivateRepairer = (props) => apiCallBegan({
    url: '/api/admin/deactiveUser',
    headers: {
        Authorization: props.token
    },
    data: {
        user_id: props.user_id,
        role_id: 2
    },
    method: "POST",
    onSuccess: deActivateRepairerSuccessful.type,
    onError: repairerRequestFailed.type
});

const { reducer, actions } = repairer;
export const { repairerReceived, repairerRequestFailed, repairerRequestStart,
    activeRepairerSuccessful, deActivateRepairerSuccessful
} = actions;
export default reducer;