const Property = require('./property');
const utils = require('./util');
const dbConfig = require('./detaDb');

class Model {
  name;
  properties;

  constructor(name, properties) {
    if (typeof name !== 'string' || !properties.length) throw new Error(`Malformed model declaration`);
    this.name = name;
    this.properties = [];
    properties.forEach((property, idx) => {
      if (!property.name) throw new Error(`Missing property name at position ${idx}`);
      this.properties.push(new Property(property.name, property.type));
    });
    const createdClass = utils.createClass(this.properties, this.name);
    return new createdClass();
  }
}
module.exports = Model;
