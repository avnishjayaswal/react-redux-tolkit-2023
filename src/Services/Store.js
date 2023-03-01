import { configureStore } from "@reduxjs/toolkit";
import usesReducer from "../Components/Users/UsersSlice"

const store = configureStore({
    reducer: {
       userData: usesReducer 
    }
}) ;

export default store ;

