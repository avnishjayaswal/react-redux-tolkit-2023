import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk("user/fetch", async () => {
  try {
    const respone = await axios.get("https://api.github.com/users");
    return respone.data;
  } catch (error) {
    console.log(error.message);
  }
});


export default fetchUser ;