import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Add, Edit, GetList, Remove, User } from "../services/UserStore";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: GetList(),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, { payload }: PayloadAction<User>) => {
      Add(payload);
      state.users = GetList();
    },
    edit: (state, { payload }: PayloadAction<User>) => {
      Edit(payload);
      state.users = GetList();
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      Remove(payload);
      state.users = GetList();
    },
    renew: (state) => {
      state.users = GetList();
    },
  },
});

export const { add, edit, remove, renew } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user.users;

export default userSlice.reducer;
