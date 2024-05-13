import { createSlice } from "@reduxjs/toolkit"



const orderSlice=createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
           state.push(action.payload)
        },
        remove:(state,action)=> {
            for(let i=0;i<state.length;i++){
                if (state[i].id === action.payload){
                    state.splice(i,1)
                    break
                }
            }
                     
            // return state.filter((item)=>item.id!==action.payload)
                     
            }

    }


})

export const {add,remove}=orderSlice.actions;

export default orderSlice.reducer;