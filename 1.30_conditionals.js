//Conditionals
//if statements
var isSunny = false;

if(isSunny == false){
	console.log("What a gloomy day.")
};

//if else statements
var time = 10

if(time > 12){
	console.log("Good afternoon.")
} else {
	console.log("Good morning.")
};

//Multiple variables can be used to create multi part Conditionals
var numberOfPosts = 100;

if(numberOfPosts <= 99){
	console.log("Keep posting!");
}else if(numberOfPosts === 100){
	console.log("You just hit 100 posts!");
}else{
	console.log("Wow, you're over a 100 posts.");
}