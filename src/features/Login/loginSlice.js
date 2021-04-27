import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const login = createSlice({
    name: 'login',
    initialState: {
        user: [],
        loading: false,
        error: null
    },
    reducers: {
        logout: (state, action) => {
            state.user = []
            localStorage.setItem('token', '');
        },
        loginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);

            state.user = action.payload;
            state.loading = false;
        },
        loginFailed: (state, action) => {
            state.loading = false;
            alert('Phone number or password incorrect')
            console.log('failed: ', action)
        },
        changePasswordSuccessful: (state, action) => {
            if (action.payload === "Incorrect password") {
                alert("Incorrect old password");
                state.error = action.payload
            } else {
                alert('Change password successful');
            }
        },
        changePasswordFailed: (state, action) => {
            alert('Change password failed');
        },
        resetPasswordSuccessful: (state, action) => {
            alert('Reset password successful');
        },
        actionStart: (state, action) => {
            state.error = null;
            console.log({ action })
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
    onStart: actionStart.type,
    onSuccess: loginSuccess.type,
    onError: loginFailed.type
});

export const changePassword = (props) => apiCallBegan({
    url: '/api/changePassword',
    headers: {
        Authorization: props.token
    },
    data: {
        phone_number: props.phoneNumber,
        role_id: '1',
        old_password: props.old_password,
        new_password: props.new_password
    },
    method: 'POST',
    onStart: actionStart.type,
    onSuccess: changePasswordSuccessful.type,
    onError: changePasswordFailed.type
})
export const resetPassword = (props) => apiCallBegan({
    url: '/resetPassword',
    data: {
        phone_number: props.phoneNumber,
        role_id: '1',
        new_password: props.new_password
    },
    method: 'POST',
    onStart: actionStart.type,
    onSuccess: resetPasswordSuccessful.type,
    onError: loginFailed.type
})

const { reducer, actions } = login;
export const { loginSuccess, loginFailed, logout, changePasswordSuccessful,
    changePasswordFailed, resetPasswordSuccessful, actionStart } = actions;
export default reducer;