//linked to resort.html--did alert test
  // alert("ryannnnn said hi")

var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the resorts
  // alert("ryannnnn said hi")
  // POST route for saving a new resort. You can create a resort using the data on req.body
  app.get("/", function(req, res) {
    res.render("mainpage");
  })
  
  app.get("/api/resorts", function(req, res) {
      db.Resort.findAll({
      	order: [['location', 'ASC']]
      }).then(function(resorts) {
        console.log("All resorts:");
        console.log(resorts);
        res.json(resorts);
        // res.redirect("/api/resorts");
      })

  });

  app.post("/api/findResort", function(req, res) {
      db.Resort.findOne({
      	where: {
      		resortName: req.body.resort
      	}
      }).then(function(resort) {
        console.log("Selected resort:");
        console.log(resort);
        res.json(resort);
      })

  });

  app.get("/resorts/:id", function(req, res) {
    console.log("Testing");
    db.Resort.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(resort) {
      //console.log("Selected resort:");
      console.log(resort.dataValues.resortName);
      // res.json(resort);
      res.render("resort", resort.dataValues );
      // res.redirect("/api/resorts");
    })

});
}
