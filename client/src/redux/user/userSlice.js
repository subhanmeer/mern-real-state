import { createSlice, current } from "@reduxjs/toolkit";



const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlcie = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false
        }
    }
});

export const { signInStart, signInFailure, signInSuccess } = userSlcie.actions;

export default userSlcie.reducer