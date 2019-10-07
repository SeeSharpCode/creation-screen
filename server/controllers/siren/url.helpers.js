const url = require('url');

const relativeUrl = (req, path) => url.format({
  protocol: req.protocol,
  host: req.get('host'),
  pathname: path
});

const selfUrl = req => relativeUrl(req, req.originalUrl);

module.exports = {
  relativeUrl,
  selfUrl
};
