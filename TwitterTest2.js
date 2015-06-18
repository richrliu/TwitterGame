var apiManager = require("./ApiManagement.js");
var functionManager = require("./TwitterFunctions.js");

var funcManager = new functionManager();
var apiManager = new apiManager();

hashtagArr = ['lebron', 'fallout4', 'askrachel', 'tsmwin'];

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost/data');
var htags = db.get('twitter');
var list = db.get('list');

apiManager.processDataOnHashtags(hashtagArr, htags);
hashtagString = funcManager.arrToString(hashtagArr);
console.log('here');
funcManager.addProcessedStringToColl(hashtagString, list);

htags.drop();