import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const major = createSlice({
    name: 'major',
    initialState: {
        list: [],
        isLoading: false,
        editMessage: null,
        addMessage: null
    },
    reducers: {
        majorRequestStart: (state, action) => {
            state.isLoading = true;
        },
        majorReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
            };
        },
        majorRequestFailed: (state, action) => {
            state.isLoading = false;
        },
        createMajorSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
                state.addMessage = 'success';
                alert("Create major successful");
            };
        },
        editMajorSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
                state.editMessage = 'success';
                alert('Edit major successful');
            };
        },
        activeMajorSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
                alert('Active major successful');
            };
        },
        deActivateMajorSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
                alert('Deactivate major successful');
            };
        },
    }
});

export const getListMajor = (props) => apiCallBegan({
    url: '/api/getMajor',
    headers: {
        Authorization: props
    },
    data: {
        role_id: 1
    },
    method: 'POST',
    onSuccess: majorReceived.type,
    onError: majorRequestFailed.type,
    onStart: majorRequestStart.type
});

export const createMajor = (props) => apiCallBegan({
    url: '/api/admin/createMajor',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        image: props.image
    },
    method: "POST",
    onSuccess: createMajorSuccessful.type,
    onError: majorRequestFailed.type,
    // onStart: majorRequestStart.type
});

export const editMajor = (props) => apiCallBegan({
    url: '/api/admin/updateMajor',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        id: props.id
    },
    method: "POST",
    onSuccess: editMajorSuccessful.type,
    onError: majorRequestFailed.type,
    // onStart: majorRequestStart.type
});

export const activeMajor = (props) => apiCallBegan({
    url: '/api/admin/activeMajor',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: activeMajorSuccessful.type,
    onError: majorRequestFailed.type,
    // onStart: majorRequestStart.type
});

export const deActivateMajor = (props) => apiCallBegan({
    url: '/api/admin/deactivateMajor',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deActivateMajorSuccessful.type,
    onError: majorRequestFailed.type,
    // onStart: majorRequestStart.type
});

const { reducer, actions } = major;
export const { majorReceived, majorRequestFailed, majorRequestStart, createMajorSuccessful, editMajorSuccessful,
    activeMajorSuccessful, deActivateMajorSuccessful
} = actions;
export default reducer;