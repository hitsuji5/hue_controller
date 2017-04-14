var express = require('express');
var router = express.Router();
var request = require('request');
var userName = 'ahWFgJOLhQOCAovI5Hz8hRpE8yFDQcfYuDc6stVB';
var bridgeIp = '10.0.0.10';
var baseUrl = 'http://' + bridgeIp + '/api/' + userName + '/lights/';

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/lights', function (req, res, next) {
    request(baseUrl, function(error, response, body){
        if (error) throw error;
        if (response.statusCode == 200){
            console.log(body);
            res.json(body);
        }
    });
});


router.get('/lights/:id', function (req, res, next) {
    request(baseUrl + req.params.id, function(error, response, body){
        if (error) throw error;
        if (response.statusCode == 200){
            console.log(body);
            res.json(body);
        }
    });
});

router.put('/lights/:id', function (req, res, next) {
    var state = !!(Number(req.body.on));
    console.log(state);
    request({
        url : baseUrl + req.params.id + '/state',
        method: 'PUT',
        json: {on: state}
    }, function(error, response, body){
        if (error) throw error;
        if (response.statusCode == 200){
            console.log(body);
            res.json(body);
        }
    });
});

// router.route('/leds').get(function (req, res, next) {
//   req.result = resources.pi.actuators.leds;
//   next();
// });
//
// router.route('/leds/:id').get(function (req, res, next) { //#A
//   req.result = resources.pi.actuators.leds[req.params.id];
//   next();
// }).put(function(req, res, next) { //#B
//   var selectedLed = resources.pi.actuators.leds[req.params.id];
//   selectedLed.value = req.body.value; //#C
//   req.result = selectedLed;
//   next();
// });

module.exports = router;

//#A Callback for a GET request on an LED
//#B Callback for a PUT request on an LED
//#C Update the value of the selected LED in the model


/*
//Initial version:

var express = require('express'),
router = express.Router(),
resources = require('./../resources/model');

router.route('/').get(function (req, res, next) { // #A
 res.send(resources.pi.actuators); // #B
});

router.route('/leds').get(function (req, res, next) { // #C
  res.send(resources.pi.actuators.leds);
});

router.route('/leds/:id').get(function (req, res, next) { //#D
  res.send(resources.pi.actuators.leds[req.params.id]); //#E
});

module.exports = router;

//#A Create a new route for a GET request
//#B Reply with the actuators model when this route is selected
//#C This route serves a list of LEDs
//#D with :id we inject a variable in the path which will be the LED number
//#E the path variables are accessible via req.params.id we use this to select the right object in our model and return it
*/