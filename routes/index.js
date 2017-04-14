var express = require('express');
var router = express.Router();
var request = require('request');
var userName = 'ahWFgJOLhQOCAovI5Hz8hRpE8yFDQcfYuDc6stVB';
var bridgeIp = '10.0.0.10';
var baseUrl = 'http://' + bridgeIp + '/api/' + userName + '/lights/';

router.get('/', function (req, res, next) {
    res.render('index');
});

// router.get('/lights', function (req, res, next) {
//     request(baseUrl, function(error, response, body){
//         if (error) throw error;
//         if (response.statusCode == 200){
//             console.log(body);
//             res.json(body);
//         }
//     });
// });
//
//
// router.get('/lights/:id', function (req, res, next) {
//     request(baseUrl + req.params.id, function(error, response, body){
//         if (error) throw error;
//         if (response.statusCode == 200){
//             console.log(body);
//             res.json(body);
//         }
//     });
// });

router.put('/lights/:id', function (req, res, next) {
    console.log(req.body);
    request({
        url : baseUrl + req.params.id + '/state',
        method: 'PUT',
        json: req.body
    }, function(error, response, body){
        if (error) throw error;
        if (response.statusCode == 200){
            console.log(body);
            res.json(body);
        }
    });
});

module.exports = router;