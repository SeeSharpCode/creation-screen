const express = require('express');
const app = express();
const port = 5000;

// Set up body parser.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up auth.
const passport = require('passport');
app.use(passport.initialize());
const configurePassport = require('./auth.config');
configurePassport(passport);

const auth = require('./routes/auth');
app.use('/api/auth', auth);

// Character routes.
const characters = require('./routes/characters');
app.use('/api/characters', passport.authenticate('jwt', { session: false }), characters);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
