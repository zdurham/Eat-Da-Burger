var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log(data)
    res.render("index", {burgers: data})
  }) 
})

module.exports = router;