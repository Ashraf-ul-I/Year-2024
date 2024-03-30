import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {

}

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(productAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(productAsync.fulfilled, (state) => {
                state.status = 'idle';
            })

    }
})


export const { product } = productSlice.actions;
export const productList = (state) => product;
export default productSlice.reducer;