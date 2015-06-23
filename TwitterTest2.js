var apiManager = require("./ApiManagement.js");
var functionManager = require("./TwitterFunctions.js");

var funcManager = new functionManager();
var apiManager = new apiManager();

hashtagArr = ['lebron', 'fallout4', 'askrachel', 'tsmwin'];

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost/data');
var htags = db.get('twitter');
// var list = db.get('list');

apiManager.processDataOnHashtags(hashtagArr, htags);
// console.log(hashtagArr.toString() + "array String")
// hashtagString = funcManager.arrToString(hashtagArr);
// console.log(hashtagString + "not defined");
// console.log('here');

htags.drop();