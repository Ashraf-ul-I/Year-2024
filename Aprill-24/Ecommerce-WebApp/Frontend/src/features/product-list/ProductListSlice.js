import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProduct, fetchProductsByFilters } from './ProductListApi';

const initialState = {
    products: [],
    status: 'idle'
}

export const fetchAllProductAsync = createAsyncThunk('product/fetchAllProduct', async () => {
    const response = await fetchAllProduct();
    return response.data;
})

export const fetchProductsByFiltersAsync = createAsyncThunk("product/fetchProductsByFilters", async (filter) => {
    const response = await fetchProductsByFilters(filter);
    return response.data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProductsByFiltersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })

    }
})


export const { products } = productSlice.actions;

export const SelectAllproducts = (state) => state.product.products;//state.product(this is the name of reducer).products(this things is prodcuts in reducer product)

export default productSlice.reducer;