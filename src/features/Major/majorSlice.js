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
            // eslint-disable-next-line
            if(action.payload != undefined)
            state.list = action.payload;
        },
        majorRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createMajorSuccessful: (state, action) => {
            alert('Create major successful');
        },
        editMajorSuccessful: (state, action) => {
            alert('Edit major successful');
        },
    }
});

export const getListMajor = (props) => apiCallBegan({
    url: '/api/getMajor',
    headers: {
        Authorization: props
    },
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
})

const { reducer, actions } = major;
export const { majorReceived, majorRequestFailed, majorRequestStart, createMajorSuccessful, editMajorSuccessful } = actions;
export default reducer;