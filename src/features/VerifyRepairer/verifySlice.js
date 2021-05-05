
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const notVerifiedList = createSlice({
    name: 'notVerifiedList',
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {
        verifyListRequestStart: (state, action) => {
            state.isLoading = true;
            console.log('start: ', action);
        },
        verifyListReceived: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
            };
        },
        verifyListRequestFailed: (state, action) => {
            state.isLoading = false;
            console.log('failed: ', action);
        },
        activeRepairerSuccessful: (state, action) => {
            if (action.payload !== undefined) {
                state.list = action.payload;
                state.isLoading = false;
            };
            alert('Active repairer successful');
        },
        activeRepairerFailed: (state, action) => {
            state.isLoading = false;
            alert('Active repairer failed')
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

export const verifyRepairer = (props) => apiCallBegan({
    url: '/api/admin/approveCV',
    headers: {
        Authorization: props.token
    },
    data: {
        repairer_id: props.id
    },
    method: 'POST',
    onSuccess: activeRepairerSuccessful.type,
    onError: activeRepairerFailed.type,
});

export const rejectRepairer = (props) => apiCallBegan({
    url: '/api/admin/approveCV',
    headers: {
        Authorization: props.token
    },
    data: {
        repairer_id: props.id
    },
    method: 'POST',
    onSuccess: activeRepairerSuccessful.type,
    onError: activeRepairerFailed.type,
});

const { reducer, actions } = notVerifiedList;
export const { verifyListReceived, verifyListRequestFailed, verifyListRequestStart,
    activeRepairerSuccessful, activeRepairerFailed
} = actions;
export default reducer;