//I am adding comments. Weeeeee!!!
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// // This file empties the Entries collection and inserts the test entries below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/entries",
//   {
//     useMongoClient: true
//   }
// );

const bookSeed = [
  {
    title: "Test Title",
    author: "Test Author",
    body:
      'This is a body test',
    date: new Date(Date.now())
  },
 {
    title: "Test Title",
    author: "Test Author",
    body:
      'This is a body test',
    date: new Date(Date.now())
  },
    {
    title: "Test Title",
    author: "Test Author",
    body:
      'This is a body test',
    date: new Date(Date.now())
  },
   {
    title: "Test Title",
    author: "Test Author",
    body:
      'This is a body test',
    date: new Date(Date.now())
  }
 
];

db.Entries
  .remove({})
  .then(() => db.Entry.collection.insertMany(entrySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
