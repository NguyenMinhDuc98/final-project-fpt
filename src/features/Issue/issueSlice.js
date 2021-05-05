import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const issue = createSlice({
    name: 'issue',
    initialState: {
        list: [],
        editMessage: null,
        addMessage: null
    },
    reducers: {
        issueRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        issueReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload
            };
        },
        issueRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createIssueSuccessful: (state, action) => {
            alert('Create issue successful')
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.addMessage = 'success';
            };
        },
        editIssueSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.editMessage = 'success';
            };
            alert('Edit issue successful');
        },
        activeIssueSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            alert('Active issue successful');
            window.location.reload();
        },
        deActivateIssueSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            alert('Deactivate issue successful');
            window.location.reload();
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
        service_id: props.service_id,
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
        id: props.id,
        service_id: props.service_id,
        estimate_fix_duration: props.estimate_fix_duration,
        estimate_price: props.estimate_price
    },
    method: "POST",
    onSuccess: editIssueSuccessful.type,
    onError: issueRequestFailed.type,
    onStart: issueRequestStart.type
});

export const activeIssue = (props) => apiCallBegan({
    url: '/api/admin/activeIssue',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id,
        service_id: props.service_id
    },
    method: "POST",
    onSuccess: activeIssueSuccessful.type,
    onError: issueRequestFailed.type,
    onStart: issueRequestStart.type
});

export const deActivateIssue = (props) => apiCallBegan({
    url: '/api/admin/deactivateIssue',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id,
        service_id: props.service_id
    },
    method: "POST",
    onSuccess: deActivateIssueSuccessful.type,
    onError: issueRequestFailed.type,
    onStart: issueRequestStart.type
});

const { reducer, actions } = issue;
export const { issueReceived, issueRequestFailed, issueRequestStart, createIssueSuccessful, editIssueSuccessful,
    activeIssueSuccessful, deActivateIssueSuccessful
} = actions;
export default reducer;