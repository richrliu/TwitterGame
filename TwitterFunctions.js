var arrToString = function(arr){
	str = '';
	for(var index=0;index<arr.length;index++){
		str += '[' + arr[index] + ']';
	}
	return str;
}

var stringToArr = function(str){
	str = str.substring(1, str.length-1);
	arr = str.split('][');
	set = [];
	arr.forEach(function(entry){
		if (!set.contains(entry)){
			set.push(entry);
		};
	});
	return set;
}

// var addWordToColl = function(str, coll){
// 	original = coll.find({"_id":1})[0]['list'];
// 	entry = '[' + str + ']';
// 	if (original.indexOf(entry) == -1){
// 		original+=entry;
// 	}
// 	coll.update({"_id":1},{"_id":1, "list":original});
// }

// var addProcessedStringToColl = function(str, coll){
// 	arr = str.substring(1, str.length-1);
// 	for(var index=0;index<arr.length;index++){
// 		addWordToColl(arr[index], coll);
// 	}
// }

var updateHashtagCount = function(hashtag, count, coll){
	exists = coll.find({"hashtag":hashtag, "count":count});
	if (exists.length > 0) coll.update({"hashtag":hashtag}, {"hashtag":hashtag, "count":count});
	else coll.insert({"hashtag":hashtag, "count":count});
}

var functionManager = function(){
	var self = this;
	self.arrToString = function(arr){
		return arrToString(arr);
	}
	self.stringToArr = function(str){
		return stringToArr(str);
	}
	self.addWordToColl = function(str, coll){
		addWordToColl(str, coll);
	}
	self.addProcessedStringToColl = function(str, coll){
		addProcessedStringToColl(str, coll);
	}
	self.updateHashtagCount = function(hashtag, count, coll){
		updateHashtagCount(hashtag, count, coll);
	}

}

module.exports = functionManager;