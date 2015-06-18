var arrToString = function(arr){
	str = '';
	arr.forEach(function(entry){
		str += '[' + entry + ']';
	});
	return str;
}

var stringToArr = function(str){
	str = str.substring(1, str.length-1);
	arr = str.split('][');
	set = [];
	arr.forEach(function(entry){
		if (!set.contains(entry){
			set.push(entry);
		});
	});
	return set;
}

var addWordToColl = function(str, coll){
	original = coll.find({"_id":1})[0]['list'];
	entry = '[' + str + ']';
	if (original.indexOf(entry) == -1){
		original+=entry;
	}
	coll.update({"_id":1},{"_id":1, "list":original});
}

var addProcessedStringToColl = function(str, coll){
	arr = str.substring(1, str.length-1);
	arr.forEach(function(word){
		addWordToColl(word, coll);
	});
}

var functionManager = function(){
	var self = this;
	self.arrToString = function(arr){
		arrToString(arr);
	}
	self.stringToArr = function(str){
		stringToArr(str);
	}
	self.addWordToColl = function(str, coll){
		addWordToColl(str, coll);
	}
	self.addProcessedStringToColl = function(str, coll){
		addProcessedStringToColl(str, coll);
	}

}

module.exports = functionManager;