var express = require('express');
var root = express.Router();

var Model = require('../models');

root.get('/', function(req, res){
  Model.member.findAll()
  .then (function(rows){
    res.render('member', {data_member: rows})
  })
})
//
root.get('/add', function(req, res){
  Model.member.findAll() //model,nama model=namatabel.temukansemuadata
  .then(function(rows){
    res.render('memberAdd', {data_member: rows}) //ambil file memberAdd
  })
})
root.post('/add', function(req,res){
  Model.member.create(req.body)
  .then(function(){
    res.redirect('/member');
  })
})

root.get('/edit/:id', function(req, res){
  Model.member.findById(req.params.id)
  .then(function(rows){
    res.render('memberEdit', {member_edit: rows})
  })
})
root.post('/edit/:id', function(req, res){
  Model.member.update(req.body,
  {
    where:{id:req.params.id}
  })
  .then(function(){
    res.redirect('/member')
  })
})

root.get('/delete/:id', function(req, res){
  Model.member.destroy({where:{id: req.params.id}})
  .then(function(){
    res.redirect('/member')
  })
})




module.exports= root;
