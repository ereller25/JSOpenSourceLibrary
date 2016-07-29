// Method and Arrays
// Sort - puts contents of an array in place. 
// will incorrectly place numbers

var needsSorting = [10, 9, 5, 3, 12];
console.log(needsSorting);

needsSorting.sort(); //Will put 10 first, due to the 1. Turns numbers to strings first then compares.

needsSorting.sort(function(a, b){
	if (a === b) {
		return 0;
	}
	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	}
});

console.log(needsSorting);

//Sorting mixed array



var mixedArray = ['aa', 'bb', 'a', 'c', 'cc', 3, 4, 10];
mixedArray.sort();
console.log(mixedArray);


mixedArray.sort(function(a, b){
	if(a===b){
		return 0;
	}
	if(typeof a=== typeof b){
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});

console.log(mixedArray);