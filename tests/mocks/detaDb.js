let db;
module.exports = {
  init({projectKey, dbName}) {},
  getInstance() {
    db = {
      put: data => {
        return {
          key: 'dl9e6w6859a9',
          name: 'Beverly',
          age: 44,
          hometown: 'Copernicus City',
        };
      },
      fetch: filter => {
        return {
          key: 'dl9e6w6859a9',
          name: 'Wesley',
          age: 24,
          hometown: 'San Francisco',
        };
      },
      delete: id => {
        return {
          message: 'deleted',
        };
      },
    };
    return db;
  },
};
