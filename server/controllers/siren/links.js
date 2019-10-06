const url = require('url');

const link = (rel, href, title) => ({ 
  rel,
  href,
  title: title ? title : undefined 
});
  
const relativeLink = (req, rel, href, title) => {
  const absoluteUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: `/api/${href}`
  });

  return link(rel, absoluteUrl, title);
};
  
const selfLink = req => {
  const href = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });

  return link(['self'], href);
}

module.exports = {
  link,
  relativeLink,
  selfLink
}
