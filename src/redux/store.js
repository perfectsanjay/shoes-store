import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
const  store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({serializableCheck:false}).concat(logger),
})

export const persistor = persistStore(store);

export default store;