var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;


var userDataSchema = new Schema({
  name: {type: String, required: true},
  color: String,
  phone: String,
  male: Boolean,
  birthday: Date
}, {collection: 'user-data'});

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
    male: req.body.male,
    birthday: req.body.birthday
    
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/');
});


// // Fills the update form with text from div with edit button clicked
// router.post('/fill', function(req, res, next) {
//   var id = req.body.id;

//   UserData.findById(id, function(err, doc) {
//       if (err) {
//         console.error('error, no entry found');
//       }
//       var edit = {
//         title: req.body.title,
//         content: req.body.content,
//         author: req.body.author
//       };
//           }).then(function() {
//             res.render('index', edit);
//   });


 
// });


router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.name = req.body.name,
    doc.color = req.body.color,
    doc.phone = req.body.phone,
    doc.male = req.body.male,
    doc.birthday = req.body.birthday
    doc.save();
  })
  res.redirect('/');
});



router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;
