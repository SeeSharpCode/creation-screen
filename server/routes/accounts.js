const express = require('express');
const jwt = require('jsonwebtoken');
const { addUser, getUser } = require('../auth.service');

const router = express.Router();

let userIdCounter = 0;

router.post('/', (req, res) => {
  addUser(req.body.username, req.body.password);
  return res.sendStatus(200);
});

router.post('/login', (req, res) => {
  const user = getUser(req.body.username);

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
