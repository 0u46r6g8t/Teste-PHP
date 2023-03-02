import carSlice from "./Car/carSlice";
import productSlice from "./Products/productsSlice";
import typesSlice from "./Types/typesSlice";

const rootReducer = {
    products: productSlice,
    types: typesSlice,
    car: carSlice,
}

export default rootReducer;