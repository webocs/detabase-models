const Types = {
  BOOLEAN: 'boolean',
  NUMBER: 'number',
  STRING: 'string',
  DATE: 'date',
  OBJECT: 'object',
  ARRAY: 'array',
};

class Property {
  name;
  type;

  constructor(name, type) {
    switch (type) {
      case Types.BOOLEAN:
        break;
      case Types.NUMBER:
        break;
      case Types.STRING:
        break;
      case Types.DATE:
        break;
      case Types.OBJECT:
        break;
      case Types.ARRAY:
        break;
      default:
        throw new Error(`Unknown type ${type}`);
    }
    this.name = name;
    this.type = type;
  }

  validate(value) {
    switch (this.type) {
      case Types.BOOLEAN:
        return typeof value === 'boolean';
        break;
      case Types.NUMBER:
        return typeof value === 'number';
        break;
      case Types.STRING:
        return typeof value === 'string';
        break;
      case Types.DATE:
        return value instanceof Date;
        break;
      case Types.OBJECT:
        return typeof value === 'object';
        break;
      default:
        throw new Error(`Unknown type ${type}`);
    }
  }
}
module.exports = Property;
