import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const repairer = createSlice({
    name: 'repairer',
    initialState: {
        list: [],
    },
    reducers: {
        repairerRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        repairerReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                
            };
        },
        repairerRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createRepairerSuccessful: (state, action) => {
            alert('Create repairer successful');
        },
        editRepairerSuccessful: (state, action) => {
            alert('Edit repairer successful');
        },
        activeRepairerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            // alert('Active repairer successful');
            console.log('payload: ', action.payload);
        },
        deActivateRepairerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            // alert('Deactivate repairer successful');
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
    url: '/api/admin/activeRepairer',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: activeRepairerSuccessful.type,
    onError: repairerRequestFailed.type,
    onStart: repairerRequestStart.type
});

export const deActivateRepairer = (props) => apiCallBegan({
    url: '/api/admin/deactivateRepairer',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deActivateRepairerSuccessful.type,
    onError: repairerRequestFailed.type,
    onStart: repairerRequestStart.type
});

const { reducer, actions } = repairer;
export const { repairerReceived, repairerRequestFailed, repairerRequestStart, createRepairerSuccessful,
    editRepairerSuccessful, activeRepairerSuccessful, deActivateRepairerSuccessful
} = actions;
export default reducer;