import { createSlice, current } from "@reduxjs/toolkit";
import { ISliceCar } from "../interfaces/ICar";

const initialState: ISliceCar = {
    car: {
        listProducts: [],
        valueTotal: 0,
        taxImpost: 0,
    },
    info: {
        isError: false,
        message: undefined
    },
    loading: false,
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        clearList: (state) => {
            state.car.listProducts = [];
            state.car.taxImpost = 0;
            state.car.valueTotal = 0;
        },
        addProduct: (state, { payload } ) => {
            const { car } = state;
            const products = current(car?.listProducts);
            if(products.length > 0){
                const qntTemp = products.filter(item => item.name.trim() === payload.name.trim())[0];
                if(qntTemp){
                    let d: any = {}
                    if(qntTemp){
                        d = {
                            name: qntTemp.name,
                            price: qntTemp.price,
                            qnt: qntTemp.qnt + 1
                        }
                        state.car.listProducts = [...products.filter(item => item.name.trim() !== d.name.trim()), d]
                    }
                }else {
                    car?.listProducts.push({
                        name: payload.name,
                        price: payload.price,
                        qnt: 1
                    });
                }
            }else {
                car?.listProducts.push({
                    name: payload.name,
                    price: payload.price,
                    qnt: 1
                });
            }
            state.car.taxImpost = state.car.taxImpost + parseFloat(payload.tax_price)
            state.car.valueTotal = parseFloat(state.car.valueTotal) + parseFloat(payload.price);
    }
}})

export const { addProduct, clearList } = carSlice.actions;

export default carSlice.reducer;