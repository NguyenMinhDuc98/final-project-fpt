import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const login = createSlice({
    name: 'login',
    initialState: {
        token: null,
        isLoggedIn: false
    },
    reducers: {
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.token = null
        },
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        loginFailed: (state, action) => {
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
    onSuccess: loginSuccess.type,
    onError: loginFailed.type
})

const { reducer, actions } = login;
export const { loginSuccess, loginFailed, logout } = actions;
export default reducer;