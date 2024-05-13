import { createSlice } from "@reduxjs/toolkit";



const CustomerSlice=createSlice({

    name:"customer",
    initialState:{
        name:"",
        mobile:""
    },
    reducers:{
        addCustomerData:(state,action)=>{
              state.name=action.payload.name;
              state.mobile=action.payload.mobile;
              return state;
        }
    }
})

export const {addCustomerData}=CustomerSlice.actions;
export default CustomerSlice.reducer;