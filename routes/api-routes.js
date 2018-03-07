// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the resorts
  app.get("/api/resorts", function(req, res) {

  });

  // POST route for saving a new resort. You can create a resort using the data on req.body
  app.post("/api/resorts", function(req, res) {

  });

  // DELETE route for deleting resorts. You can access the resort's id in req.params.id
  app.delete("/api/resorts/:id", function(req, res) {

  });

  // PUT route for updating resorts. The updated resorts will be available in req.body
  app.put("/api/resorts", function(req, res) {

  });
};