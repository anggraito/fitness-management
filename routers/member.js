var express = require('express');
var root = express.Router();

var Model = require('../models');

root.get('/', function(req, res){
  Model.member.findAll()
  .then (function(rows){
    res.render('member', {data_member: rows})
  })
})


module.exports= root;
