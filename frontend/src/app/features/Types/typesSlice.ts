import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ISliceTypes, ITypes } from "../interfaces/ITypes";
import { fetchTypesThunk } from "./thunk";

const initialState: ISliceTypes = {
    types: undefined,
    info: {
        isError: false,
        message: undefined
    },
    loading: false
}

const typesSlice = createSlice({
    name: "types",
    initialState,
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder.addCase(fetchTypesThunk.fulfilled, (state: ISliceTypes, { payload }) => {
            state.loading = false;
            state.types = payload.data;
        }),
        builder.addCase(fetchTypesThunk.pending, (state: ISliceTypes) => {
            state.loading = true;
        }),
        builder.addCase(fetchTypesThunk.rejected, (state: ISliceTypes, {payload}) => {
            state.loading = false;
            state.info.isError = true;
        })
    },
    reducers: {},
})

export const {} = typesSlice.actions;  

export default typesSlice.reducer;