import { createSlice } from "@reduxjs/toolkit"


const tableNumberSlice=createSlice({

    name:"tableNumber",
    initialState:"",
    reducers:{
        changeTableNumber:(state,action)=>{
            return action.payload
        }
    }
});

export const {changeTableNumber}=tableNumberSlice.actions;

export default tableNumberSlice.reducer;