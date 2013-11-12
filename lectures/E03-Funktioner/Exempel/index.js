/* SLIDE: Funktionsuttryck */

/*
function calculator(calcFunction){
	var var1 = 10;
	var var2 = 20;
	
	return calcFunction(var1, var2);
}

var sum = function(x,y){
	
	return x+y;
};

var svar = calculator(sum);

alert(svar); //30

svar = calculator(function(x,y) { return x-y;});
alert(svar);
*/


/* Slide: Självtest
function uppochned(tal){
	tal[2] = tal[0];
	
	var rundaav = function(tal){
		return tal+10;		
	};
	
	tal[2] = rundaav(tal[2]);
	
	rettal = tal[2];
	
	return rettal;	
}

var tal = [12,9,5,3,2];

tal[0] = tal[tal[4]];

var edit = uppochned(tal);

alert(edit);
*/

/*
var myArr = [34, "Nils", 84.23, {}];

for (i in myArr) {
	alert(typeof myArr[i]);
}

for (var j = 0; j < myArr.length; ++j) {
	alert(typeof myArr[j]);
}*/


/*
var myArr = [];
myArr[0] = [];
myArr[1] = [];
myArr[2] = [];

myArr[1][3] = 5;
myArr[0][1] = 8;

document.write(myArr);
*/

var myDate = new Date(2001, 5);

alert(myDate.getMonth());  // 5 

