//Objects Methods

var firstCar = {
	make 		: "Toyota",
	model 		: "Camry",
	yearBought 	: 1999,
	yearSold 	: 2007,
	miles 		: 120000,
	carInfo		: function(){
		console.log("My first car was a " + this.make + " " + this.model)
	}
};

firstCar.carInfo()

