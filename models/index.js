const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  Entries: require("./Entry")
  mongoose.connect(
    
  	uri,
  	{ 
  		useMongoClient: true
  	}
  );

  db.once("open", function() {
    console.log("mongoose connection successful"); 
    });
    
  // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./User');
   require('./Entry');

};