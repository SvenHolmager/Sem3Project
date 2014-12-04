var request = require('request');

request.post(
    'http://localhost:9999/create',
    {"username":"Oden","password":"4321","roleName": "teacher"},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);