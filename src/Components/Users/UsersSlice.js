import { createSlice } from "@reduxjs/toolkit";
import fetchUser from "./UsersThunk";

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    isLoading: false,
    userData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.userData = [];
      state.isLoading = true;
    });
    builder.addCase(fetchUser.rejected, (state) => {
        state.userData = [];
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer ;
