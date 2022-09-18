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

const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`, contactId);
      console.log("ContactId: ", contactId);
      return data;
    } catch (error) {
      // CONTACT: добавить обработку ошибки error.message
    }
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, createContacts, deleteContacts };
