const express = require('express');
const router = express.Router();
const SirenEntity  = require('./siren/siren');
const { relativeUrl, selfUrl } = require('./siren/url.helpers');

router.get('/', (req, res) => {
  const home = new SirenEntity(['home'])
    .addLink(['self'], selfUrl(req))
    .addLink(['games'], relativeUrl(req, 'api/games'), { title: 'Games' })
    .addLink(['characters'], relativeUrl(req, 'api/characters'), { title: 'Characters' });

  return res.send(home);
});

module.exports = router;
