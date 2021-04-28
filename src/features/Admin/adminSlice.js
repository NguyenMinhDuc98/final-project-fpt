import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const admin = createSlice({
    name: 'admin',
    initialState: {
        name: '',
        isLoading: false
    },
    reducers: {
        adminRequestStart: (state, action) => {
            state.isLoading = true;
        },
        adminRequestFailed: (state, action) => {
            state.isLoading = false;
        },
        editAdminSuccessful: (state, action) => {
            state.isLoading = false;
            localStorage.setItem('username', action.payload.name);
            console.log(action.payload);
            alert('Edit admin successful');
        }
    }
});

export const editAdmin = (props) => apiCallBegan({
    url: '/api/updateUser',
    headers: {
        Authorization: props.token
    },
    data: {
        name: props.name,
        email: props.email,
        user_id: props.id,
        phone: props.phone_number,
        role_id: '1'
    },
    method: "POST",
    onSuccess: editAdminSuccessful.type,
    onError: adminRequestFailed.type,
    onStart: adminRequestStart.type
});

const { reducer, actions } = admin;
export const { adminRequestFailed, adminRequestStart, editAdminSuccessful,
} = actions;
export default reducer;