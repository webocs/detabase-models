# Detabase models

A lightweight ODM library for [Deta base](https://www.deta.sh/) database. This library provides a simple abstraction
for adding model like structures to deta base. In the words of deta  "a fully-managed, fast, scalable and secure NoSQL database with a focus on end-user simplicity. It offers a UI through which you can easily see, query, update and delete records in the database".

This library adds simple model like structures and collections-like management of stored data.

### How to install

To install run

```npm i -save detabase-models```

### How to use

First of all you will need an account at [deta.sh](https://deta.sh), once you get your account follow their [docs](https://docs.deta.sh/docs/base/about)
to obtain a project key. Once you have your key initalize deta

```javascript
const {detaDb} = require('detabase-models');

detaDb.init({
    projectKey: '<your_project_key>',
    dbName:"dbName"
});
```
Once initialized, you have to create a model. Create a models folder, and inside create
a file called "yourmodelname.js". Inside this file you can define your model, for example
if you need a model to store persons you could do something like this:

```javascript
const {Model} = require("detabase-models");
const Person = new Model("person",[
    {
        name: "name",
        type: "string"
    },
    {
        name: "lastname",
        type: "number"
    },
    {
        name: "isHuman",
        type: "boolean"
    }
]);
module.exports = Person;

/**
 Supported types are
 - BOOLEAN
 - NUMBER
 - STRING
 - DATE
 - OBJECT
 - ARRAY
**/
```

After declaring a model, just import it into your project and use it to create, update,
fetch and delete instances. For our person example, you should add

```javascript
const Person = require('./models/person');

const newPerson = {
    name: "Mark",
    lastName: "Jhonson",
    isHuman: false
};
// Create a new person in the db
const newPerson = await Person.create(newPerson);

// Create returns an object that contains the key created by deta to indenify the stored instance
// You can use this key to fetch the person from the db with getById
const fetchedPerson = await Person.getById(newPerson.key);

// If you want to fecth all the instances use get
const allPepople = await Person.get();
```
