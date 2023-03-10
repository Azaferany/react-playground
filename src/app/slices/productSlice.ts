import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Add, Edit, GetList, Remove, Product } from "../services/ProductStore";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: GetList(),
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, { payload }: PayloadAction<Product>) => {
      Add(payload);
      state.products = GetList();
    },
    edit: (state, { payload }: PayloadAction<Product>) => {
      Edit(payload);
      state.products = GetList();
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      Remove(payload);
      state.products = GetList();
    },
    renew: (state) => {
      state.products = GetList();
    },
  },
});

export const { add, edit, remove, renew } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProduct = (state: RootState) => state.product.products;

export default productSlice.reducer;
