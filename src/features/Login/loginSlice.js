import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/api";

const login = createSlice({
    name: 'login',
    initialState: [
        {phoneNumber: '0987654321', password: '123'},
    ],
    reducers: {
        loggingIn: (state, action) => {
            state.push(action.payload);
        },
        loginSuccess: (state, action) => {
            console.log('success: ', action)
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
export const { loggingIn, loginSuccess, loginFailed } = actions;
export default reducer;