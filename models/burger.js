// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sandwhich = {
  all: function(cb) {
    orm.all("sandwhich", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("sandwhich", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sandwhich", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
  orm.delete("sandwhich", cols, vals, function(res) {
    cb(res);
  });
}
};

// Export the database functions for the controller (catsController.js).
module.exports = sandwhich;
