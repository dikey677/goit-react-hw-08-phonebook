import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store, persistor } from "./Redux/store";
// import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
