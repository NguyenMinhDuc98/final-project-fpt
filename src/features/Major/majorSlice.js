import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const major = createSlice({
    name: 'major',
    initialState: {
        list: [],

    },
    reducers: {
        majorRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        majorReceived: (state, action) => {
            console.log(JSON.stringify(action))
            state.list = action.payload;
        },
        majorRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createMajorSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list.push(action.payload)
            };
            console.log('log: ', action.payload);
        },
        editMajorSuccessful: (state, action) => {
            alert('Edit major successful');
        },
        deleteMajorSuccessful: (state, action) => {
            alert('Delete major successful');
            console.log('payload: ', action.payload);
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
    onStart: majorRequestStart.type
});

export const editMajor = (props) => apiCallBegan({
    url: '/api/admin/updateMajor',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        image: props.image,
        id: props.id
    },
    method: "POST",
    onSuccess: editMajorSuccessful.type,
    onError: majorRequestFailed.type,
    onStart: majorRequestStart.type
});

export const deleteMajor = (props) => apiCallBegan({
    url: '/api/admin/deleteMajor',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: "POST",
    onSuccess: deleteMajorSuccessful.type,
    onError: majorRequestFailed.type,
    onStart: majorRequestStart.type
})

const { reducer, actions } = major;
export const { majorReceived, majorRequestFailed, majorRequestStart, createMajorSuccessful, editMajorSuccessful,
    deleteMajorSuccessful
} = actions;
export default reducer;