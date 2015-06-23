var apiManager = require("./ApiManagement.js");
var functionManager = require("./TwitterFunctions.js");

var apiManager = new apiManager();
var funcManager = new functionManager();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost/data');
var htags = db.get('twitter');
// var list = db.get('list');

trendingHashtagArr = funcManager.requestTrendsAtLocation(23424977);
trendingHashtagArr.forEach(function(hashtag){
	// funcManager.addWordToColl(hashtag, list);
	arr[0] = hashtag;
	apiManager.processDataOnHashtags(arr, htags);
});
// cursor = list.find({"_id":1});
// str = JSON.parse(cursor[0]['list']);
// console.log(str);