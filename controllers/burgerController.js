var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/burger", function(req, res) {
  burger.all(function(Data) {
    res.render("index", Data);
  });
});

router.post("/burger/create", function(req, res) {
  burger.create(req.body.name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burger/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/burger/:id", function(req, res) {
  burger.delete(req.params.id, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;