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
            state.list = action.payload;
            console.log('action: ', action );
            console.log('payload: ', action.payload );
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
        deleteRepairerSuccessful: (state, action) => {
            alert('Delete repairer successful');
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

export const deleteRepairer = (props) => apiCallBegan({
    url: '/api/admin/deleteRepairer',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deleteRepairerSuccessful.type,
    onError: repairerRequestFailed.type,
    onStart: repairerRequestStart.type
})

const { reducer, actions } = repairer;
export const { repairerReceived, repairerRequestFailed, repairerRequestStart, createRepairerSuccessful,
    editRepairerSuccessful, deleteRepairerSuccessful
} = actions;
export default reducer;