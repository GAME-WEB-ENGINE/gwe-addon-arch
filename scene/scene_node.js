class SceneNode {
  constructor() {
    this.tags = [];
    this.viewIndexes = [0];
    this.visible = true;
  }

  onUpdate(ts) {
    // virtual method called during update phase !
  }

  onDraw(viewIndex) {
    // virtual method called during draw phase !
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  hasTag(tag) {
    return this.tags.includes(tag);
  }

  clearTags() {
    this.tags = [];
  }

  addViewIndex(viewIndex) {
    this.viewIndexes.push(viewIndex);
  }

  removeViewIndex(viewIndex) {
    this.viewIndexes.splice(this.viewIndexes.indexOf(viewIndex), 1);
  }

  hasViewIndex(viewIndex) {
    return this.viewIndexes.includes(viewIndex);
  }

  clearViewIndexes() {
    this.viewIndexes = [];
  }

  getVisible() {
    return this.visible;
  }

  setVisible(visible) {
    this.visible = visible;
  }
}

module.exports.SceneNode = SceneNode;