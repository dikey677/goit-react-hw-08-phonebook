import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit/";

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (credentials) => {
    try {
      // ---
      const { data } = await axios.get("/contacts", credentials);
      return data;
    } catch (error) {
      //--
    }
  }
);

const createContacts = createAsyncThunk(
  "contacts/createContacts",
  async (credentials) => {
    try {
      const { data } = await axios.post("/contacts", credentials);
      return data;
    } catch (error) {
      // CONTACT: добавить обработку ошибки error.message
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (credentials) => {
    try {
      const { data } = await axios.delete(
        `/contacts/${credentials}`,
        credentials
      );
      return data;
    } catch (error) {
      // CONTACT: добавить обработку ошибки error.message
    }
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, createContacts, deleteContact };
