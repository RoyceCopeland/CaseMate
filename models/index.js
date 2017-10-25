<<<<<<< HEAD
module.exports = {
  entry: require("./entry")
};
=======
const mongoose = require('mongoose');
module.exports.connect = (uri) => {
  Entries: require("./Entry")
  mongoose.connect(

    uri,
    {
      useMongoClient: true
    }
  );


  // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./User');
  require('./entry');

};
>>>>>>> ce985401ade85e3439ffd9aebcf370e6ffbb099b
