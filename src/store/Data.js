import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData=createAsyncThunk("fetchData",async ()=>{
   const Data= await fetch("https://chandukommineni.github.io/json_data/fooddata.json")
   .then((response)=>response.json())
   .then((response)=>response)
   console.log(Data.items)
   return Data.items;
})
const Data=createSlice({
    name:"data",
    initialState:{
        data:[],
        filteredData:[],
        loading:true,
        error:""
    
    },
    reducers:{
      filterData:(state,action)=>{
            if (action.payload!=="All Items"){
              state.filteredData=state.data;
              state.filteredData=state.filteredData.filter((item)=>item.category===action.payload)
              return state
            }
            else{
               state.filteredData=state.data
               return state
            }
      }
    },
  
    extraReducers:(builder) => {
        builder
          .addCase(fetchData.pending, (state,action) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            
            state.data = action.payload;
            state.filteredData=action.payload
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },

})

export const {filterData}=Data.actions;

export default Data.reducer;
