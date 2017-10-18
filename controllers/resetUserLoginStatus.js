const User = require("../models/User");

module.exports = {
  reset: function( fn ) {
    ToDo.update(
      {},
      {loggedInToday: false}
    ).then(function(doc) {
      fn( doc );
    }).catch(function(err) {
      console.log(err);
    });
  }
};