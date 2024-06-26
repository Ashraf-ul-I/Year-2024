import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null

        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateStart: (state) => {
            state.loading = true;
            state.error = null
        },
        updateFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        UpdateSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null

        },


        //delete user slice
        deleteStart: (state) => {
            state.loading = true;
            state.error = null
        },
        deleteFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteSuccess: (state, action) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null

        },
        signoutSuccess: (state, action) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null
        },

        signoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    }
})


export const { signInStart, signInSuccess, signInFailure, signoutSuccess, signoutFail, updateStart, updateFailure, UpdateSuccess, deleteFailure, deleteStart, deleteSuccess } = userSlice.actions;

export default userSlice.reducer;