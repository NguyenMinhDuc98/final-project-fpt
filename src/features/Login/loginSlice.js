import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router";
import { apiCallBegan } from "../../store/api";

const login = createSlice({
    name: 'login',
    initialState: {
        user: [],
        loading: false,
        error: null,
        message: null,
        changePassMessage: null,
        resetPassMessage: null,
        message: null,
    },
    reducers: {
        logout: (state, action) => {
            state.user = [];
            state.message = null;
            localStorage.clear();
        },
        loginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload));

            state.user = action.payload;
            state.loading = false;
            state.message = 'is_logged_in';
        },
        loginFailed: (state, action) => {
            state.loading = false;
            state.message = 'login_failed';
            return
        },
        changePasswordSuccessful: (state, action) => {
            if (action.payload === "Incorrect password") {
                alert("Incorrect old password");
                state.loading = false;
                state.error = action.payload;
                state.changePassMessage = 'failed';
            } else {
                state.changePassMessage = 'success';
                alert('Change password successful');
            }
        },
        resetPasswordSuccessful: (state, action) => {
            state.resetPassMessage = 'success';
            alert('Reset password successful');
        },
        actionStart: (state, action) => {
            state.error = null;
            state.loading = true;
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
    onSuccess: changePasswordSuccessful.type
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