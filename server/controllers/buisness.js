const { Console } = require('console');
let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Buisness = require('../models/buisness');

module.exports.DisplayBuisnessList = (req, res, next) => {
  
    Buisness.Model.find( (err, data) => {
        if(err)
        {
          console.error(err);
          res.end()
        }
        else{
          console.log(data)
          res.render('index', { title: 'Buisness List', buisnessess: data ,
          displayName: req.user ? req.user.displayName : ''});  
        } 
      }).collation({locale:'en',strength:2}).sort({name:1});
      
    }

  module.exports.DisplayAddPage = (req, res, next)=> {
    res.render('index', { title: 'Add Contact' });
}

module.exports.ProcessAddPage = (req, res, next)=> {

    // instantiate a new object of type Component
    let buisness = Buisness.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Buisness.Model.create(buisness, (err, Buisness) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/buisness-list');
    });
}

module.exports.DisplayEditPage = (req, res, next)=> {
    let id = req.params.id;

    // pass id to the db 
    Buisness.Model.findById(id, (err, BuisnessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', { title: 'Edit Buisness', data: BuisnessToEdit,
        displayName: req.user ? req.user.displayName : '' });
    });
}

module.exports.ProcessEditPage = (req, res, next)=> {
    let id = req.params.id;

     // instantiate a new object of type Component
     let updatedBuisness = Buisness.Model({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Buisness.Model.updateOne({_id: id}, updatedBuisness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/buisness-list');
    });
}

module.exports.ProcessDeletePage = (req, res, next)=> {
    let id = req.params.id;

    Buisness.Model.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/buisness-list');
    });
}