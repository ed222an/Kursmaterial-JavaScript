function Animal(name){
	this.name = name || "Ellen Nu";	
	console.log("Skapar Animal");
}

Animal.prototype.scream = function(){
	console.log("Wooooaaaa säger "+this.name);
};

Animal.prototype.getName = function(){
	return name;	
};

// -------------------------------------------------


function Tiger(name, color){
	// Kalla på superklassens konstruktor
	
	//Animal.call(this, name);
		
	this.color = color;
}
Tiger.prototype = new Animal();

Tiger.prototype.roar = function(){

	console.log(this.name.toUpperCase());	
};



// -------------------------------------------------




//animal = new Animal("Gösta");

//animal.scream();

tiger1 = new Tiger("Janne");
console.log(tiger1.name);
//tiger2 = new Tiger("Kalle");

//tiger1.roar();
//tiger2.roar();

//tiger1.scream();
//tiger2.scream();

