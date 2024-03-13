#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && Number.isInteger(h) && w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // If the conditions are not met, create an empty object
      // This effectively ignores setting width and height,
      // leaving the instance without these properties.
    }
  }
}
module.exports = Rectangle;
