require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const { SERVER_PORT } = process.env

const app = express();

app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
