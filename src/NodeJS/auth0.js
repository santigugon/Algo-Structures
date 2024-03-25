import express from "express";
import pkg from "express-openid-connect";
const { auth, requiresAuth } = pkg;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:5173",
  clientID: "7WKFdHDzGuqj7A0cCyzZXQo2WfhrdXpa",
  issuerBaseURL: "https://dev-7h8wa2ewzisofb0k.us.auth0.com",
};

app.use(auth(config));
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
export function startServer() {
  app.listen(3000, function () {
    console.log("Listening on http://localhost:3000");
  });
}
// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL

// req.oidc.isAuthenticated is provided from the auth router

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});
