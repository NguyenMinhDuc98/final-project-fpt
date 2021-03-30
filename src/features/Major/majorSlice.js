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
            state.list = action.payload;
        },
        majorRequestFailed: (state, action) => {
            console.log('failed: ', action);
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

const { reducer, actions } = major;
export const { majorReceived, majorRequestFailed, majorRequestStart } = actions;
export default reducer;