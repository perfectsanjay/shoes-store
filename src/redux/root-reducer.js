import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./user/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
