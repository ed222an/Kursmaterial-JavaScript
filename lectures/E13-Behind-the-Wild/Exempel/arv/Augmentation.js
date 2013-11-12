function Bear(strength){

 this.strength = strength;

}

var oldBear = new Bear(10);
var strongBear = new Bear(200);

strongBear.addStrength = function(){
	this.strength += 100;
	console.log("Björnen är nu riktigt stark");
	};

console.log(oldBear.strength);
console.log(strongBear.strength);

strongBear.addStrength();

console.log(oldBear.strength);
console.log(strongBear.strength);

// -------------------------------------------------------------------------

document.getElementsByClassName = function(name, type){
		
		var r = [];
        
        // Locate the class name (allows for multiple class name)
        var re = new RegExp("(^|\\s)"+ name +"(\\s|$)");
        
        // Limit search by type, or look trough all elements
        var e = document.getElementsByTagName(type || "*");
        for(var j=0; j < e.length; j++)
        {
            // If the element has the class, add it for return
            if(re.test(e[j].className)) 
                r.push(e[j]);
        }
        
        return r;    
}

window.onload = function(){
	var elements = document.getElementsByClassName("test", "div");
	console.log("Antal element med test som class:"+elements.length);
}
