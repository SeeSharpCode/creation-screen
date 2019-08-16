const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

let userIdCounter = 0;

const users = [
  { id: userIdCounter, username: 'user', password: 'pass' }
];

router.post('/', (req, res) => {
  console.log('Creating new account', req.body);
  users.push({ id: ++userIdCounter, username: req.body.username, password: req.body.password });
  return res.sendStatus(200);
});

router.post('/login', (req, res) => {
  const user = users.find(user => user.username === req.body.username);

  if (!user) {
    return res.status(401).send('User not found');
  }

  if (user.password === req.body.password) {
    const token = jwt.sign({ id: user.id }, 'foo');
    return res.send(token);
  } else {
    return res.status(401).send("Invalid password");
  }
});

module.exports = router;
