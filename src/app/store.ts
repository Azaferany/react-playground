import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import dialogReducer from "./slices/dialogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    dialog: dialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
