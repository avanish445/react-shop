import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "../../services/productsApi";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return getProducts()
});
export const fetchProductById = createAsyncThunk('product/fetchProduct', async (id) => {
    return getProduct(id)
});
export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        product: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Sinngle product fetch
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default productsSlice.reducer;

