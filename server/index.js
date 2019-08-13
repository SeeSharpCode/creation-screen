const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

const characters = require('./routes/characters');

app.use('/api/characters', characters);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));