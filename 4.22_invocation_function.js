// Function Invocation Pattern
//	A work around for issues involving functions not the property of an object. 

myObject.double = function() {
	var that = this;  //Workaround

	var helper = function() {
	that.value = add(that.value, that.value);
	};

	helper();    // invokes this as a function
};

myObject.double();
document.writeln(myObject.getvalue());


var calc={
  name: 'Plus',
  plus: function(a,b){
    return(
      console.log(this),
      console.log(arguments),
      console.log(a+b),
      console.log(this.name)
    );
  }
}
calc.plus(2,2);