const express = require('express');
const router = express.Router();
const { link, selfLink } = require('./siren/siren');

router.get('/', (req, res) => {
  const home = {
    class: ['home'],
    title: 'Creation Screen',
    links: [
      selfLink(req),
      link(req, ['games'], 'games', { title: 'Games' }),
      link(req, ['characters'], 'characters', { title: 'Characters' })
    ]
  };

  return res.send(home);
});

module.exports = router;
