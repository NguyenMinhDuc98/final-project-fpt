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
        loginRequest: (state, action) => {
            state.loading = true;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            localStorage.setItem('token', '');
        },
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.loading = false;
            // localStorage.setItem('user', action.payload);
            localStorage.setItem('token', action.payload.token);
        },
        loginFailed: (state, action) => {
            state.loading = false;
            console.log('failed: ', action)
        },
        changePasswordSuccessful: (state, action) => {
            alert('Change password successful');
        }
    }
});

export const getToken = (props) => apiCallBegan({
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

const { reducer, actions } = login;
export const { loginRequest, loginSuccess, loginFailed, logout, changePasswordSuccessful } = actions;
export default reducer;