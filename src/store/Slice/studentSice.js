import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "AAA", score: "60",classname:"A"},
  { id: "2", name: "BBB",  score: "60",classname:"B" },
  { id: "3", name: "CCC",  score: "60",classname:"C" },

];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    onEdit(state, action) {
      const { id, name, score,classname} = action.payload;    
      const updatedArray = state.map((student)=>{
        if(student.id===id) {return { id, name, score,classname}}else{
        return student
      } });

      return updatedArray
    },
    onDelete(state,action) {
      const {id} = action.payload;
      const remainingItem = state.filter((student) => student.id !== id);
      return  remainingItem
    },
    onAdd(state,action) {
      const {name, score,classname} = action.payload;
      state.push({ id: state.length + 1, name, score,classname});
      return  state;
    },
  },
});
export const { onDelete,onAdd,onEdit } = studentSlice.actions;
export default studentSlice.reducer;