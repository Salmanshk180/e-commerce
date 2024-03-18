import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/product-data/productData";
import filterProducts from "../slices/filter-products/filterProducts";
import cartProductsSlice from "../slices/cart-products/cartProducts";
import { persistStore, persistReducer, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "../slices/users/users";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  filterProducts: filterProducts,
  cartProducts: cartProductsSlice,
  users:users,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
