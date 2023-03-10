import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TextFieldState {
  value: string;
}

const initialState: TextFieldState = {
  value: "",
};

const textFieldSlice = createSlice({
  name: "textField",
  initialState,
  reducers: {
    setTextFieldValue(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
  },
});

export const { setTextFieldValue } = textFieldSlice.actions;
export const selectTextFieldValue = (state: RootState) => state.dialog.value;

export default textFieldSlice.reducer;
