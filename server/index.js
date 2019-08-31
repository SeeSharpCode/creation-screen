const express = require('express');
const app = express();
const port = 5000;

// CORS
const cors = require('cors');
app.use(cors());

// Set up body parser.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up auth.
const passport = require('passport');
app.use(passport.initialize());
const { configurePassport } = require('./auth.service');
configurePassport(passport);

// Auth routes.
const auth = require('./controllers/accounts');
app.use('/api/accounts', auth);

// Character routes.
const characters = require('./controllers/characters');
app.use('/api/characters', passport.authenticate('jwt', { session: false }), characters);

app.listen(port, () => console.log(`creation-screen listening on port ${port}!`));
