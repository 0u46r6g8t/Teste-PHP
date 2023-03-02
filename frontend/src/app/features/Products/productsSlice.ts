import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IProduct, ISliceProduct } from "../interfaces/IProducts";
import { fetchCreateProductThunk, fetchProductThunk } from "./thunk";

const initialState: ISliceProduct = {
    products: undefined,
    info: {
        isError: false,
        message: undefined
    },
    filters: {
        prodTypes: []
    },
    loading: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder.addCase(fetchProductThunk.fulfilled, (state: ISliceProduct, { payload }) => {
            state.loading = false;
            state.products = payload.data;
        }),
        builder.addCase(fetchProductThunk.pending, (state: ISliceProduct) => {
            state.loading = true;
        }),
        builder.addCase(fetchProductThunk.rejected, (state: ISliceProduct, {payload}) => {
            state.loading = false;
            state.info.isError = true;
        }),
        builder.addCase(fetchCreateProductThunk.fulfilled, (state: ISliceProduct, { payload }) => {
            state.loading = false;
            console.log(payload);
            // state.products = payload.data;
        })
        builder.addCase(fetchProductThunk.pending, (state: ISliceProduct) => {
            state.loading = true;
        }),
        builder.addCase(fetchProductThunk.rejected, (state: ISliceProduct, {payload}) => {
            state.loading = false;
            state.info.isError = true;
        })
    },
    reducers: {
        filterByType: (state, { payload }) => {
            const data: any[] = [];
            if(payload){
                const dataTemp = payload.map((item: any) => item.fk_type);
                
                data.push(... new Set(dataTemp.map((item: string) => item)));

                state.filters.prodTypes = data;
            }
        }
    },
})

export const { filterByType } = productSlice.actions;

export default productSlice.reducer;