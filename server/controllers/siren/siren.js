const url = require('url');

module.exports = {
  link(req, rels, path, other) {
    return {
      rel: rels,
      href: url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `api/${path}`
      }),
      ...other
    }
  },
  selfLink(req) {
    return {
      rel: ['self'],
      href: url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      })
    }
  }
}
