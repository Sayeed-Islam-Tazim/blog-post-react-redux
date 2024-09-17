import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Mohammad" },
  { id: 22, name: "Sayeedul" },
  { id: 333, name: "Islam" },
  { id: 4444, name: "Talukder" },
  { id: 55555, name: "Tazim" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
