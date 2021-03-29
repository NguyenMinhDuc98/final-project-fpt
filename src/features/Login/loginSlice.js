import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name: 'login',
    initialState: [
        {phoneNumber: '0987654321', password: '123'},
    ],
    reducer: {
        loggingIn: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { reducer, actions } = login;
export const { loggingIn } = actions;
export default reducer;