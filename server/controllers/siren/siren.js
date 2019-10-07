module.exports = class SirenEntity {
  constructor(classes, properties, other) {
    this.class = classes;
    this.properties = properties;
    this.links = [];
    this.actions = [];
    this.entities = [];
    Object.assign(this, other);
  }

  addEntity(rels, other) {
    this.entities.push({ rel: rels, ...other });
    return this;
  }

  addLinkEntity(rels, href, other) {
    this.entities.push({ rel: rels, href, ...other });
    return this;
  }

  addAction(name, href, other) {
    this.actions.push({ name, href, ...other });
    return this;
  }

  addLink(rels, href, other) {
    this.links.push({ rel: rels, href, ...other });
    return this;
  }
}
