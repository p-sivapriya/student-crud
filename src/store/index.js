import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Slice/studentSice";
const DATA_KEY = "student_data";

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem(DATA_KEY, JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem(DATA_KEY) !== null) {
    return JSON.parse(localStorage.getItem(DATA_KEY)); 
  }
  
};

export default configureStore({
  reducer: {students: studentReducer},
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware)
});