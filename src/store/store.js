import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import filterSlice from "./filterSlice";
import tableNumberSlice from "./tableNumberSlice";
import Data from "./Data";
import CustomerSlice from "./CustomerSlice";
export const store=configureStore({
    reducer:{
        order:orderSlice,
        filter:filterSlice,
        tableNumber:tableNumberSlice,
        data:Data,
        customer:CustomerSlice
    }
});

