const express = require('express');
const router = express.Router();
const SirenEntity = require('./siren/siren');
const { selfLink } = require('./siren/links');

router.get('/', (req, res) => {
  return res.send(SirenEntity.builder()
    .classes(['games', 'collection'])
    .link(selfLink(req))
    .entities([
      {
        class: ['game'],
        rel: ['item'],
        properties: {
          name: 'Skyrim',
        },
        links: [
          { rel: ['icon'], href: "images/skyrim.png" }
        ]
      },
      {
        class: ['game'],
        rel: ['item'],
        properties: {
          name: 'Fallout 4',
        },
        links: [
          { rel: ['icon'], href: "images/fo4.png" }
        ]
      }
    ])
    .build());
});

module.exports = router;
