import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
  { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
});

export default studentSlice.reducer;