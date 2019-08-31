const express = require('express');
const jwt = require('jsonwebtoken');
const { users } = require('../auth.service');

const router = express.Router();

router.post('/', (req, res) => {
  users.push({ 
    id: users.length,
    username: req.body.username,
    password: req.body.password
  });
  return res.sendStatus(200);
});

router.post('/login', (req, res) => {
  const user = users.find(user => user.username === req.body.username);

  if (!user) {
    return res.status(401).send('User not found');
  }

  if (user.password === req.body.password) {
    const token = jwt.sign({ 
      id: user.id, username: 
      req.body.username 
    }, 'foo');

    return res.send(token);
  } else {
    return res.status(401).send("Invalid password");
  }
});

module.exports = router;
