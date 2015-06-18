function arrToString(arr){
	str = '';
	arr.forEach(function(entry){
		str += '[' + entry + ']';
	});
	return str;
}

function stringToArr(str){
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

function addWordToColl(str, coll){
	original = coll.find({"_id":1})[0]['list'];
	entry = '[' + str + ']';
	if (original.indexOf(entry) == -1){
		original+=entry;
	}
	coll.update({"_id":1},{"_id":1, "list":original});
}

function addProcessedStringToColl(str, coll){
	arr = str.substring(1, str.length-1);
	arr.forEach(function(word){
		addWordToColl(word, coll);
	});
}