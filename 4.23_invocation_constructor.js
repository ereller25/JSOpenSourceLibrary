// Constructor Invocation Pattern
// 	Can invoke a function with the new prefix
//		new - object will be created with a hidden link to the value of the prototype member
//			also changes the behavior of the return statement


var Person = function (name) {
	this.name = name;
};

Person.prototype.greet = function() {
	return this.name + ' says hi.';
};

alert(new Person('John').greet());

// Functions with new (or to be used with new) are called constructors, make sure to call it with new