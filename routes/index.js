var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');





var Schema = mongoose.Schema;

// The blue print for the table
var userDataSchema = new Schema({
  name: {type: String, required: true},
  color: String,
  phone: String,
  gender: String,
  number: {type: Number, min: 1, max: 100},
  vehicle: String
}, {collection: 'user-data'});

// The table itself using the blueprint model above
var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    id: req.body.id,
    name: req.body.name,
    color: req.body.color,
    phone: req.body.phone,
    gender: req.body.gender,
    number: req.body.number,
    vehicle: req.body.vehicle
    
  };

  var data = new UserData(item);
  data.save(function (err) {if (err) console.log ('Error on save!')});

  res.redirect('/get-data');
});



 

router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.name = req.body.name,
    doc.color = req.body.color,
    doc.phone = req.body.phone,
    doc.gender = req.body.gender,
    doc.number = req.body.number,
    doc.vehicle = req.body.vehicle,
    doc.save(function (err) {if (err) console.log ('Error on save!')});
  })
  res.redirect('/get-data');
});



router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/get-data');
});

module.exports = router;
