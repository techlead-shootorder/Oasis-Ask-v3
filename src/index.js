import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContext from "./utils/Context";
import { ClerkProvider } from '@clerk/clerk-react'
// import dotenv, { config } from 'dotenv';
// config.dotenv = dotenv;



const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLIC_CLERK_PUBLISHABLE_KEY;

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
