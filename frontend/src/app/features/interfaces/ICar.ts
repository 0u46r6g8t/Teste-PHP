import { IGlobalReducer } from "./IGlobal";
import { IProductCar } from "./IProducts";

export interface ISliceCar extends IGlobalReducer {
    car: ICar;
}

export interface ICar {
    listProducts: IProductCar[];
    valueTotal: any;
    taxImpost: number;
}