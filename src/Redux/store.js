import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";
import contactsReducer from "./contacts/contacts-slice";

// Redux Toolkit
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
}; // Создаем конфигурацию с параметрами ключа и хранилища данных (localStorage)

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    // Сохранение данных с учетом параметров и редюсера
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      } // Добавление логгера в midleware (распыляет весь middleware и добавляет логгер для отслеживания состояний)
    ).concat(logger),

  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
