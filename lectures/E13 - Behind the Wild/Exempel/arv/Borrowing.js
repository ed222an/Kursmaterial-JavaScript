
function Tiger(name){
	this.name = name || "Janne";
}

Tiger.prototype.roar = function(){
	console.log(this.name.toUpperCase());	
};

function Bear(name){
	this.name = name || "Grylls";
}

Bear.prototype.hit = function(){
	console.log(this.name+" ger dig en smäll");	
};

// -------------------------------------------------
function CoolAnimal(name){
	this.name = name;	
}


var sa = {name: "Johan"};

var t = new Tiger();
var b = new Bear();

t.roar.call(sa);
b.hit.call(sa);
