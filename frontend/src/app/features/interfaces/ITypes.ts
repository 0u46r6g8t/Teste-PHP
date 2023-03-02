import { IGlobalReducer } from "./IGlobal";

export interface ISliceTypes extends IGlobalReducer{
    types: ITypes[] | undefined;
}

export interface ITypes {
    text: string;
    id: string;
}