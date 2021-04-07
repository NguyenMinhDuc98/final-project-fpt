import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const issue = createSlice({
    name: 'issue',
    initialState: {
        list: [],
    },
    reducers: {
        issueRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        issueReceived: (state, action) => {
            if (action.payload !== undefined)
                state.list = action.payload;
        },
        issueRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createIssueSuccessful: (state, action) => {
            alert('Create issue successful');
        },
        editIssueSuccessful: (state, action) => {
            alert('Edit issue successful');
        },
        deleteIssueSuccessful: (state, action) => {
            alert('Delete issue successful');
            console.log('payload: ', action.payload);
        },
    }
});

export const createIssue = (props) => apiCallBegan({
    url: '/api/admin/createIssue',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        service_id: props.id,
        estimate_fix_duration: props.estimate_fix_duration,
        estimate_price: props.estimate_price
    },
    method: "POST",
    onSuccess: createIssueSuccessful.type,
    onError: issueRequestFailed.type,
    onStart: issueRequestStart.type
});

export const editIssue = (props) => apiCallBegan({
    url: '/api/admin/updateIssue',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        service_id: props.id,
        estimate_fix_duration: props.estimate_fix_duration,
        estimate_price: props.estimate_price
    },
    method: "POST",
    onSuccess: editIssueSuccessful.type,
    onError: issueRequestFailed.type,
    onStart: issueRequestStart.type
});

export const deleteIssue = (props) => apiCallBegan({
    url: '/api/admin/deleteIssue',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deleteIssueSuccessful.type,
    onError: issueRequestFailed.type,
    onStart: issueRequestStart.type
})

const { reducer, actions } = issue;
export const { issueReceived, issueRequestFailed, issueRequestStart, createIssueSuccessful, editIssueSuccessful,
    deleteIssueSuccessful
} = actions;
export default reducer;