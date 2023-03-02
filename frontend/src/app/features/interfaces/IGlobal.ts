export interface IGlobalReducer{
    info: {
        isError: boolean;
        message: string | undefined;
    }
    loading: boolean;    
}