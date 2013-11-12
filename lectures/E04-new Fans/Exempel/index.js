/* SLIDE: Nästlade funktioner */
/*
function playGuitar(chord){

	var strings = 6;
	
	function stroke(){
		var result = "Strokes "+strings+" strings with chord "+chord;
		return result;		
	}	

	alert(stroke());
	
	//alert(result);  // Fail, result undefined
}

playGuitar("G5");
*/

/* SLIDE: Variablers scope */

/*
function playGuitar(chord){

	var strings = 6;
	
	function stroke(){
		var result = "Strokes "+strings+" strings with chord "+chord;
		return result;		
	}	

	alert(stroke());
	
	//alert(result);  // Fail, result undefined
}

playGuitar("G5");
*/

/* SLIDE: Assosiativ array*/
/*
var member1 = {
   name: "Jemaine",
   birthYear: 1974
};

member1["Home town"] = "Masterton";

//alert(member1.Home town);

member1.filmography =  {};
member1.filmography["film1"] = "Blood Suckers";
member1.filmography["film2"] = "Fizz";
member1.filmography["film3"] = "Tongan Ninja";

for(propName in member1.filmography){
	alert(member1.filmography[propName]);	
}*/

/* SLIDE: Metoder*/
/*
function Robot(arms, legs){
	this.arms = arms;
	this.legs = legs;
	this.pokeHuman = function(){
		return "it was dead. poked it width "+this.arms+" arms.";
	};
}

var robot1 = new Robot(3, 2);
var robot2 = new Robot(2, 3);

alert(robot1.pokeHuman());
*/

/* SLIDE: Prototype*/
/*
function Robot(arms, legs){
	this.arms = arms;
	this.legs = legs;
}
Robot.prototype.pokeHuman = function(){
		return "it was dead. poked it width "+this.arms+" arms.";
	};

var robot1 = new Robot(3, 2);
var robot2 = new Robot(2, 3);

alert(robot1.pokeHuman());

*/



/*
function Robot(){
}

Robot.prototype.doBinarySolo = function(){ alert ("1 0 1 0 0 1 0 1 1 1 0 0 1 0 1 0 0 1 0 1");};

var bot1 = new Robot();

// circle1.constructor pekar på funktionen Circle
alert(bot1.constructor == Robot);

// Detta innebär att vi kan skapa nya objekt utifrån egenskapen:
var bot2 = new bot1.constructor();

*/
/*
function Robot(arms, legs){
	this.arms = arms;
	this.legs = legs;
}

Robot.LAW1 = "A robot may not injure a human being or, through inaction, allow a human being to come to harm.";
Robot.LAW2 = "A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.";
Robot.LAW3 = "A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.";

Robot.prototype.pokeHuman = function(){
		return "it was dead. poked it width "+this.arms+" arms.";
	};


var robot = new Robot(3, 2);

alert(Robot.LAW1);

alert(robot.LAW1); // Undefined


alert(robot.constructor.LAW1); 
*/



function Robot(arms, legs){

	this.getArms = function(){return arms;};
	this.getLegs = function(){return legs;};

	this.setArms = function(_arms){arms = _arms || 0;};
	this.setLegs = function(_legs){legs = _legs || 0;};
	this.setArms(arms);
	this.setLegs(legs);

	var killHumans = true;
	
	this.killHumans = false;
	
	
	this.start = function(){
		if(killHumans){
			alert("Pang");
		}
		
	};
	
	// Privata metoder kommer inte åt publika egenskaper
	var that = this;
	
	var armYourself = function(){
		//alert("All "+this.getArms()+" arms are armed."); 	// Fail
		alert("All "+that.getArms()+" arms are armed."); 	// All undefined arms are armed);
	};
	armYourself();
}

Robot.prototype.pokeHuman = function(){
   return "it was dead. poked it with "+this.getArms()+" arms.";
};

Robot.prototype.toString = function(){
	return "I am a robot with "+this.getArms()+" arms and "+this.getLegs()+" legs.";
};

Robot.prototype.valueOf = function(){
	return this.getArms() + this.getLegs();	
};

var robot1 = new Robot(6, 4);
var robot2 = new Robot(2, 2);
//alert(robot1.getArms()); //it was dead. poked it with 6 arms.
//alert(robot1.legs); // undefined
if(robot1.killHumans === false){
	robot1.start();
}

robot1.setArms(10, 4);
alert(robot1.pokeHuman());
alert(robot1.getLegs());
alert(robot1);
alert(robot1+robot2);

