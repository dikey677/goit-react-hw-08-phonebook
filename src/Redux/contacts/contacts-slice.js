import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "../../Redux/contacts/contacts-operations";

const initialState = {
  id: null,
  name: null,
  number: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      contactsOperations.createContacts.fulfilled,
      (state, action) => {
        return [...state, action.payload];
      }
    );
    builder.addCase(
      contactsOperations.fetchContacts.fulfilled,
      (state, action) => {
        return action.payload;
      }
    );
  },
});

export default contactsSlice.reducer;
