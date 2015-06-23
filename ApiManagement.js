var functionManager = require("./TwitterFunctions.js");
var request = require('request');
var OAuth = require('oauth').OAuth;

var funcManager = new functionManager();

var requestTrendsAtLocation = function(location){
    ckey = 'oZCz1zkJwn3MaCgF9U33CQsK3';
    csecret = 'DkTjEPefQMnSpcxMofq5UkII4XEZajAE9d9w7ojweZIFYKAkQT';
    atoken = '479153124-1TKHoCzevmGAe9mMFxbld8P0OOXoCtd0R1M154G5';
    asecret = 'Df9PeMalswpheIMqhiPjSwzTQZhzyOnqS5WiwxZRIc2PD';
    url = 'https://api.twitter.com/1.1/trends/place.json';
    url = url + '?id=' + location.toString();
    var oauth = new OAuth.OAuth(
		'https://api.twitter.com/oauth/request_token',
		'https://api.twitter.com/oauth/access_token',
		ckey,
		csecret,
		'1.0A',
		null,
		'HMAC-SHA1'
	);
	outputArr = [];
	oauth.get(url, atoken, asecret, 
		function (error, data, response){
	 		if (error) console.error(error);
	 		parsed = JSON.parse(data);
	 		parsed[0]['trends'].forEach(function(trend){
	 			if (trend['name'].lastIndexof('#') == 0){
	 				outputArr.push(trend['name']);
	 			}
	 		});
		});
	return outputArr;
}

var processDataOnHashtags = function(hashtagArr, coll){
	ckey = '7b2e644deef137ac704a5c7e25336ba00557269e5'
    csecret = '9e85d43b8ad1b398208bf008e489a460'
    token = '123eedd4ccd7cb9834cf67934cff4bfe0557269e5'
    tokensecret = 'a388ca35a5330da1902227313e46a213'
    url = 'https://ritetag.com/api/v2/historical-data/'
    var oauth = new OAuth(
		null,
		null,
		ckey,
		csecret,
		'1.0',
		null,
		'HMAC-SHA1'
	);

	for (i=0; i<hashtagArr.length; i++){
		hashtag = hashtagArr[i];
		urlurl = url+hashtag;
		console.log(urlurl);
		totalCount = 0;
		var promise = oauth.get(urlurl, token, tokensecret, 
			function (error, data, response){
		 		if (error) console.error(error);
		 		// console.log(response);
		 		parsed = JSON.parse(data);
		 		collection = parsed['data'];
		 		collection.forEach(function(day){
		 			console.log(day['date'] + ': ' + day['unique'].toString());
		 			totalCount += day['unique'];
		 		});
		 		console.log(parsed['hashtag']);
		 		console.log(totalCount);
			});
			// coll.insert({'hashtag':hashtag, 'count':totalCount});
			promise.then(function(){
				console.log('here');
				funcManager.updateHashtagCount(hashtag, totalCount, coll);
			}, function(err){
				console.log(err);
			});
	}
	// hashtagArr.forEach(function(hashtag){

	// 	});
}

var apiManager = function(){
	var self = this;
	self.requestTrendsAtLocation = function(location){
		requestTrendsAtLocation(location);
	}
	self.processDataOnHashtags = function(hashtagArr, coll){
		processDataOnHashtags(hashtagArr, coll);
	}
}

module.exports = apiManager;