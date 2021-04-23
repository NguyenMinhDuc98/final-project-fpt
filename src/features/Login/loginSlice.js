import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const login = createSlice({
    name: 'login',
    initialState: {
        user: [],
        isLoggedIn: false,
        loading: false
    },
    reducers: {
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.user = []
            localStorage.setItem('token', '');
        },
        loginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);

            localStorage.setItem('user', JSON.stringify(action.payload));

            state.isLoggedIn = true;
            state.user = action.payload;
            state.loading = false;
        },
        loginFailed: (state, action) => {
            state.loading = false;
            alert('Phone number or password incorrect')
            console.log('failed: ', action)
        },
        changePasswordSuccessful: (state, action) => {
            alert('Change password successful');
        },
        resetPasswordSuccessful: (state, action) => {
            alert('Reset password successful');
        }
    }
});

export const loginRequest = (props) => apiCallBegan({
    url: '/login',
    data: {
        phone_number: props.phoneNumber,
        password: props.password,
        role_id: "1"
    },
    method: "POST",
    onStart: loginRequest.type,
    onSuccess: loginSuccess.type,
    onError: loginFailed.type
});

export const changePassword = (props) => apiCallBegan({
    url: '/api/changePassword',
    headers:{
        Authorization: props.token
    },
    data: {
        phone_number: props.phoneNumber,
        role_id: '1',
        old_password: props.old_password,
        new_password: props.new_password
    },
    method: 'POST',
    onStart: loginRequest.type,
    onSuccess: changePasswordSuccessful.type,
    onError: loginFailed.type
})
export const resetPassword = (props) => apiCallBegan({
    url: '/resetPassword',
    data: {
        phone_number: props.phoneNumber,
        role_id: '1',
        new_password: props.new_password
    },
    method: 'POST',
    onStart: loginRequest.type,
    onSuccess: resetPasswordSuccessful.type,
    onError: loginFailed.type
})

const { reducer, actions } = login;
export const { loginSuccess, loginFailed, logout, changePasswordSuccessful, resetPasswordSuccessful } = actions;
export default reducer;