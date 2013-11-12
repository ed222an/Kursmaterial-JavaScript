
/* Här skapar vi en konstruktorfunktion Robot. Detta blir vår "klass".
 * Observera att i denna fil finns enbart sådant som hör till "klassen". Detta för att underlätta
 * för oss när vi läser koden. Själva applikationen körs igång i robot_run.js
 */

function Robot(arms, legs){

	// Getters
	this.getArms = function(){return arms;};
	this.getLegs = function(){return legs;};

	// Setters
	this.setArms = function(_arms){arms = _arms || 0;};
	this.setLegs = function(_legs){legs = _legs || 0;};
	// Anropa setters när konstruktorn anropas
	this.setArms(arms);
	this.setLegs(legs);

	// Privat
	var killHumans = true;
	
	// Publik
	this.killHumans = false;
		
	// metoden start kommer åt den privata variablen killHumans och inte den publika om inte this används.
	this.start = function(){
		armYourself();
		
		if(killHumans){
			alert("Pang");
		}
		
	};
	
	// Privata metoder kommer inte åt publika egenskaper
	// Därför lägger vi en privat medlem (that) som pekar på (this)
	// Privata medlemmar har även den privata metoden åtkomst till.
	// Konceptet heter closures och kommer att förklaras närmre senare.
	var that = this;
	
	var armYourself = function(){
		//alert("All "+this.getArms()+" arms are armed."); 	// Get tolkningsfel eftersom metoden inte har åtkomst till this.
		alert("All "+that.getArms()+" arms are armed."); 	// All undefined arms are armed);
	};
}

Robot.prototype.pokeHuman = function(){
   return "it was dead. poked it with "+this.getArms()+" arms.";
};
/* toString ska vi ta för vana att alltid överlagra.
 * 
 */
Robot.prototype.toString = function(){
	return "I am a robot with "+this.getArms()+" arms and "+this.getLegs()+" legs.";
};

/*  Value of är ganska meningslös på en robot, men ska man jobba med objekt som kan beräknas är den bra
 * att överlagra.
 */
Robot.prototype.valueOf = function(){
	return this.getArms() + this.getLegs();	
};

