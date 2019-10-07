const express = require('express');
const router = express.Router();
const SirenEntity = require('./siren/siren');
const { relativeUrl, selfUrl } = require('./siren/url.helpers');

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
  properties: game,
  links: [
    {
      rel: ['icon'],
      href: game.icon
    },
    {
      rel: ['self'],
      href: relativeUrl(req, `api/games/${game.name}`)
    }
  ]
});

router.get('/', (req, res) => {
  const games = new SirenEntity(['games', 'collection'])
    .addLink(['self'], selfUrl(req));

  mockGames.map(game => toEmbeddedEntity(req, game)).forEach(entity => games.addEntity(entity));

  return res.send(games);
});

router.get('/:name', (req, res) => {
  
  return res.send(req.params.name);
});

module.exports = router;
