import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit/";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    return data;
  } catch (error) {
    // CONTACT: добавить обработку ошибки error.message
  }
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    return data;
  } catch (error) {
    // CONTACT: добавить обработку ошибки error.message
  }
});