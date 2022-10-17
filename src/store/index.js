import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Slice/studentSice";

export default configureStore({
  reducer: {students: studentReducer},
});