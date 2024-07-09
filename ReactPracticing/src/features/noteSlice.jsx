import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
};

const saveNotes = JSON.parse(localStorage.getItem("note"));
if(saveNotes){
    initialState.notes = saveNotes;
}
const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers:{
        addNote:(state,action)=> {
            state.notes = [...state.notes, action.payload];
            localStorage.setItem('note',JSON.stringify(state.notes))
        },
    },
});

export const {addNote} = noteSlice.actions;
export default noteSlice.reducer;