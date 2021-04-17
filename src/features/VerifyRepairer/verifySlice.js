
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const notVerifiedList = createSlice({
    name: 'notVerifiedList',
    initialState: {
        list: [],

    },
    reducers: {
        verifyListRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        verifyListReceived: (state, action) => {
            localStorage.setItem('verifyList', action.payload);

            state.list = action.payload;
        },
        verifyListRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        activeRepairerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
            };
            console.log('log: ', action.payload);
            console.log('success: ', action);
        },
        activeRepairerFailed: (state, action) => {
            console.log('failed: ', action);
        },
        activeRepairerStart: (state, action) => {
            console.log('start: ', action);
        },
    }
});

export const getNotVerifiedList = (props) => apiCallBegan({
    url: '/api/admin/getAllRepairerNotVerified',
    headers: {
        Authorization: props
    },
    onSuccess: verifyListReceived.type,
    onError: verifyListRequestFailed.type,
    onStart: verifyListRequestStart.type
});

export const activeRepairer = (props) => apiCallBegan({
    url: '/api/admin/approveCV',
    headers: {
        Authorization: props.token
    },
    data: {
        id: props.id
    },
    method: 'POST',
    onSuccess: activeRepairerSuccessful.type,
    onError: activeRepairerFailed.type,
    onStart: activeRepairerStart.type
});

const { reducer, actions } = notVerifiedList;
export const { verifyListReceived, verifyListRequestFailed, verifyListRequestStart,
    activeRepairerSuccessful, activeRepairerFailed, activeRepairerStart
} = actions;
export default reducer;