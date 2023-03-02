import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { IProductCreate } from "../interfaces/IProducts";

export const fetchProductThunk = createAsyncThunk('products/getAll', async () => {
    try{
        const { data } = await api.get('/product').then(response => response);
        
        if(data) {
            return data;
        }

    }catch(error: any) {
        return error;
    }
})

export const fetchCreateProductThunk = createAsyncThunk('products/creat', async (dataCreate: IProductCreate) => {
    try {
        const { data } = await api.post('/product', {
            dataCreate
        }).then(response => response);
        
        if(data) {
            return data;
        }
    }catch(error: any) {
        return error;
    }
})