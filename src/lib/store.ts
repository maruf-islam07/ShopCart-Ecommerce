import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

//1st step: set configuration set redux persist
const persistConfig = {
  key: "root",
  storage,
  whishlist: ["cart"], //only save the cart slice in local storage
};

// ২. সব রিডিউসারকে একসাথে করা
const rootReducer = combineReducers({
  cart: cartReducer,
});

// ৩. রিডিউসারকে পার্সিস্ট রিডিউসার এ র‍্যাপ করা
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
