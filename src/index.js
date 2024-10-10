import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./utils/Context";
import { ClerkProvider } from '@clerk/clerk-react'
import dotenv, { config } from 'dotenv';
config.dotenv = dotenv;


const PUBLISHABLE_KEY = "pk_test_bmljZS1kb3ZlLTIwLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <AppContext>
      <App />
    </AppContext>
    </ClerkProvider>
  </React.StrictMode>
);
