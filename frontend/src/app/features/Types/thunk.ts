import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchTypesThunk = createAsyncThunk('types/getAll', async () => {
    try{
        const { data } = await api.get('/Type').then(response => response);
        
        if(data) {
            return data;
        }

    }catch(error: any) {
        return error;
    }
})