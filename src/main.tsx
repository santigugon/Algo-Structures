import React from "react";
import ReactDOM from "react-dom/client";
import App from "./React/src/App.tsx";
import "./style/index.css";
import "./style/style.scss";
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7h8wa2ewzisofb0k.us.auth0.com"
      clientId="l0OKWcqneiZwj4aX8ZSbeK1Lwd1z5Rgr"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/home",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
