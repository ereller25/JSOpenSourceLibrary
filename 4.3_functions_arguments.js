// Function Agruments
// 	Bonus parameter available to functions. 
//		Makes a function that can take an unspecified number of parameters

var sum = function() {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i +=1) {
		sum += arguments[i];
	}
	return sum;
};

document.writeln(sum(4, 5, 10, 25));


// Because of a  design error, argument is not really an array, but an array-like object. 
// Lacks array methods