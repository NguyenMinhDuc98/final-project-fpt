import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const admin = createSlice({
    name: 'admin',
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {
        adminRequestStart: (state, action) => {
            console.log('start: ', action);
        },
        adminRequestFailed: (state, action) => {
            console.log('failed: ', action);
        },
        createAdminSuccessful: (state, action) => {
            alert('Create admin successful');
        },
        editAdminSuccessful: (state, action) => {
            alert('Edit admin successful');
        }
    }
});

export const editAdmin = (props) => apiCallBegan({
    url: '/api/admin/updateAdmin',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        image: props.image,
        id: props.id
    },
    method: "POST",
    onSuccess: editAdminSuccessful.type,
    onError: adminRequestFailed.type,
    onStart: adminRequestStart.type
});

const { reducer, actions } = admin;
export const { adminReceived, adminRequestFailed, adminRequestStart, editAdminSuccessful,
} = actions;
export default reducer;