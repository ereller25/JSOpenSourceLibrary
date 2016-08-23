// Method Invocation Pattern
//		A function stored as a property of an object, called a method
//		When invoked, it is bound to that object

var myObject = {
         value: 0,
         increment: function (inc) {
             this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

// 