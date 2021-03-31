
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
            state.list = action.payload;
        },
        verifyListRequestFailed: (state, action) => {
            console.log('failed: ', action);
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

const { reducer, actions } = notVerifiedList;
export const { verifyListReceived, verifyListRequestFailed, verifyListRequestStart } = actions;
export default reducer;