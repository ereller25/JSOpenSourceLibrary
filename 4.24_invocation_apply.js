// Apply Invocation Pattern
//	A method on the Function.prototype, makes it possible to use one object method for another
//		apply can take two arguments 

var array = [3, 4];
var sum = add.apply(null, array);

// Object with status
var statusObject = {
	status: 'fine'
};

var status = Quo.prototype.get_status.apply(statusObject);









var calc = function(arg1,arg2) {
	console.log(arg1);
	console.log(arg2);
	console.log(this);
	console.log(this.minus);
};