import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const login = createSlice({
    name: 'login',
    initialState: {
        user: [],
        token: null,
        isLoggedIn: false,
        loading: false
    },
    reducers: {
        loginRequest: (state, action) => {
            state.loading = true;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.token = null
        },
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.loading = false;
        },
        loginFailed: (state, action) => {
            state.loading = false;
            console.log('failed: ', action)
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
})

const { reducer, actions } = login;
export const { loginRequest, loginSuccess, loginFailed, logout } = actions;
export default reducer;