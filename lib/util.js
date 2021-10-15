const detaDb = require('./detaDb');
module.exports = {
  createClass: (properties, name) => {
    return class {
      constructor() {}

      async create(values) {
        let toCreate = {};
        for (const property of properties) {
          if (property.validate(values[property.name])) {
            toCreate[property.name] = values[property.name];
          } else throw new Error(`Property \"${property.name}\" [${values[property.name]}] is not of type ${property.type} as declared in model`);
        }
        toCreate.collection = name;
        return await this.save(toCreate);
      }

      async save(newObject) {
        const toCreate = this.toJson(newObject);
        toCreate.collection = name;
        try {
          const insertedUser = await detaDb.getInstance().put(toCreate);
          if (!this['id']) this['id'] = insertedUser.key;
          return insertedUser;
        } catch (e) {
          throw e;
        }
      }

      async getById(id) {
        let returnedObject;
        try {
          returnedObject = await detaDb.getInstance().get(id);
          this.fromJson(returnedObject);
        } catch (e) {
          throw e;
        }
        return returnedObject;
      }

      async get() {
        let returnedObject;
        try {
          returnedObject = await detaDb.getInstance().fetch({collection: name});
          this.fromJson(returnedObject);
        } catch (e) {
          throw e;
        }
        return returnedObject;
      }

      async updateAll(values) {
        let toCreate = {};
        for (const property of properties) {
          if (property.validate(values[property.name])) {
            toCreate[property.name] = values[property.name];
          } else throw new Error(`Property \"${property.name}\" [${values[property.name]}] is not of type ${property.type} as declared in model`);
        }
        toCreate.collection = name;
        return await this.save(toCreate);
      }

      async updateById(id, values) {
        const toUpdate = {};
        for (const property of properties) {
          if (property.validate(values[property.name])) {
            toUpdate[property.name] = values[property.name];
          } else throw new Error(`Property \"${property.name}\" [${values[property.name]}] is not of type ${property.type} as declared in model`);
        }
        toUpdate.key = id;
        return await detaDb.getInstance().put(toUpdate);
      }

      toJson(newObject) {
        let jsonObject = {};
        for (const property of properties) {
          jsonObject[property.name] = newObject[property.name];
        }
        this['id'] = this.id;
        return jsonObject;
      }
    };
  },
};
