const express = require('express');
const router = express.Router();
const { link, selfLink } = require('./siren/siren');

const mockGames = [
  {
    name: 'Skyrim',
    icon: 'images/skyrim.png'
  },
  {
    name: 'Fallout 4',
    icon: 'images/fo4.png'
  }
];

const toEmbeddedEntity = (req, game) => ({
  class: ['game'],
  rel: ['item'],
  properties: game,
  links: [
    link(req, ['self'], `games/${game.name}`),
    { rel: ['icon'], href: game.icon }
  ]
});

router.get('/', (req, res) => {
  const games = {
    class: ['games', 'collection'],
    entities: mockGames.map(game => toEmbeddedEntity(req, game)),
    links: [selfLink(req)]
  };

  return res.send(games);
});

router.get('/:name', (req, res) => {
  return res.send(req.params.name);
});

module.exports = router;
