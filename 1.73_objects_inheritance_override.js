// Object Inheritance & Override
// When we want a specific object to override the method that has been set up. 
// TODO - actually add inheritance stuff
var car = {
	make			: "",
	model			: "",
	yearBought		: 0,
	yearsOwned		: 0,
	miles			: 0,
	maintenanceCost	: 0,
	carInfo			: function(){
		console.log("My first car was a " + this.make + " " + this.model);
	},
	favCar			: function(){
		console.log();
		if (this.yearsOwned >= 5 && this.maintenanceCost < 5000){
			console.log(this.model + " was my best car.");
		}else{
			console.log(this.model + " got the job done, kind of.");
		}
	}
};

var tCamry = Object.create(car);
	tCamry.make = "Toyota";
	tCamry.model = "Camry";
	tCamry.yearBought = 1999;
	tCamry.yearsOwned = 4;
	tCamry.miles = 140000;
	tCamry.maintenanceCost = 4;

tCamry.favCar();