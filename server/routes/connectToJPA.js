/**
 * Created by Pranit Anand on 27-11-2014.
 */
var http = require('http');
var options = [{
    hostname: 'localhost',
    port: '9999',
    method: 'GET',
    path: '/login/ArturKoziel,arar'
}, {
    hostname: 'localhost',
    port: '9999',
    method: 'GET',
    path: '/login/ArturKoziel,arar'
}];

var httpSend = function (http, options, callback) {

    var request = http.request(options, function (res) {
        var result = "";
        res.on('data', function (chunk) {
            result += chunk;
        });
        res.on('end', function () {
            callback(null, result);
        });
    });

    request.on('error', function (e) {
        callback(e);
    });
    //the following is mandatory
    request.end();
};

httpSend(http, options, function (err, data) {
    if (err) console.log("Error");
    else console.log("Result: " + data);
})
