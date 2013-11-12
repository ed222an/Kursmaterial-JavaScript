function inherit(C, P){
	var F = function(){};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.uber = P.prototype;
	C.prototype.constructor = C;	
}


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
		
	this.color = color;
}

inherit(Tiger, Animal);

Tiger.prototype.roar = function(){

	console.log(this.name.toUpperCase());	
};



// -------------------------------------------------




animal = new Animal("Gösta");

animal.scream();

tiger1 = new Tiger("Janne");
console.log(tiger1.color);
tiger2 = new Tiger("Kalle");

tiger1.roar();
tiger2.roar();

tiger1.scream();
tiger2.scream();

