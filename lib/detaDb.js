const {Deta} = require('deta');
let db;
module.exports = {
  init({projectKey, dbName}) {
    const deta = Deta(projectKey); // configure your Deta project
    db = deta.Base(dbName); // access your DB
  },
  getInstance() {
    if (!db) throw new Error('Deta database has not been initialized, run init first');
    return db;
  },
};
