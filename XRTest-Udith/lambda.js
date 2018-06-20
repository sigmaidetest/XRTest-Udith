let AWS = require('aws-sdk');
var AWSXRay = require('aws-xray-sdk');
AWSXRay.captureHTTPsGlobal(require('http'));
var http = require('http');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.Twitter();

exports.handler = function (event, context, callback) {

    console.log(event);
    twitter.searchTweets(twitterClients['twClient'], { "q": "serverless", "count": "5" })
        .then(response => {
            let data = response.data;
            console.log(data);
        })
        .catch(err => console.log(err));

    callback(null, 'Successfully executed');
}