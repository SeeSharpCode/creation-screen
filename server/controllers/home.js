const express = require('express');
const router = express.Router();
const SirenEntity  = require('./siren/siren');
const { relativeLink, selfLink } = require('./siren/links');

router.get('/', (req, res) => {
  return res.send(SirenEntity.builder()
    .classes(['home'])
    .link(selfLink(req))
    .link(relativeLink(req, ['games'], 'games', 'Games'))
    .link(relativeLink(req, ['characters'], 'characters', 'Characters'))
    .build());
});

module.exports = router;
