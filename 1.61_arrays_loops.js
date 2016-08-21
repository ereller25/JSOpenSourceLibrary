//Looping Arrays - also called iterating 
var majorsArray = ["Poli Sci", "Journalism", "Criminal Justice", "Psych", "Business"];
//to list majors
for (var i in majorsArray){
	console.log(majorsArray[i]);
}

//or as a function to do the same 
function listMajors(){
	for(var i=0; i< majorsArray.length; i++){
		console.log(majorsArray[i]);
	}
}

listMajors();
