const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const users = [
  { id: 583, username: 'user', password: 'pass' }
];

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
