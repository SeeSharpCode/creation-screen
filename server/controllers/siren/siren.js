class SirenEntity {
  constructor(builder) {
    this.class = builder.classes;
    this.properties = builder.properties;
    this.entities = builder.entities;
    this.actions = builder.actions;
    this.links = builder.links;
  }

  static builder() {
    class Builder {
      classes(classes) {
        this.classes = classes;
        return this;
      }

      properties(object) {
        this.properties = object;
        return this;
      }

      entities(entities) {
        this.entities = entities;
        return this;
      }

      action(action) {
        if (!this.actions) {
          this.actions = [];
        }

        this.actions.push(action);
        return this;
      }

      link(rel, href) {
        this.link({ rel, href });
        return this;
      }

      link(link) {
        if (!this.links) {
          this.links = [];
        }

        this.links.push(link);
        return this;
      }

      build() {
        return new SirenEntity(this);
      }
    }

    return new Builder();
  }
}

module.exports = SirenEntity;
