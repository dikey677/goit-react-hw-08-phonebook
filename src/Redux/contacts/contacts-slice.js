import { createSlice } from "@reduxjs/toolkit/";
import contactsOperations from "../../Redux/contacts/contacts-operations";

const initialState = {
  id: null,
  name: null,
  number: null,
};

// console.log(initialState);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [contactsOperations.createContacts.fulfilled](state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.number = action.payload.number;
    },
  },
});

export default contactsSlice.reducer;
