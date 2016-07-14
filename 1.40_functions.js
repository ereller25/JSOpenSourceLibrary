//Functions

function addNumbers(){
	var x = 5
	var y = 10
	console.log(x + y);
};

addNumbers();

function multiplyNumbers(z,q){
	console.log(z * q);
};

multiplyNumbers(5, 10);

function shootingPercentage(hits, misses){
	console.log(hits / misses);
}
shootingPercentage(7, 11)

function effectiveFieldGoals(fgm, tpm, fga){
	console.log((fgm + 0.5 * tpm)/ fga);
}
effectiveFieldGoals(5, 2, 10);