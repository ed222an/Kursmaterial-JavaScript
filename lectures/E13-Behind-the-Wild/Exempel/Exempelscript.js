

/* Exempel, Closures */
/*
function delayedAlert(msg, time){

	setTimeout(function(){ alert(msg); }, time );

}

delayedAlert("Kalle", 3000);
*/

/* ------------------------------------------------------------------------------------------------------- */

/* Exempel, Closures II */

function delayedAlert(time){

	for(var i=0; i < 2; i++)
	{
		dAlert(i, time);

	}

}

function dAlert(txt, tid)
{
	setTimeout(function(){ alert(txt); }, tid );
}

delayedAlert(3000);


/* ------------------------------------------------------------------------------------------------------- */



/* Exempel, Context */

/*
var circle = {

	radius: 9,
	getArea:function()
	{
		alert((this.radius * this.radius) * Math.PI);	
		
	}
} 

circle.getArea();

window.onload = circle.getArea;
*/
/* ------------------------------------------------------------------------------------------------------- */

/*

var HIK = {};
HIK.util = {};
HIK.util.shapes = {};

HIK.util.shapes = (function(){

    function Circle() {

        this.radius = 9;
    	
        function sayHello(){
            alert("Hello. Cirkulera...");
        }
    		
        this.getCircumference = function()
        {
            sayHello();
            return 2*Math.PI*this.radius;
        }
    }

    Circle.prototype.getArea = function()
    {
	        return (this.radius * this.radius) * Math.PI;	
    }

    // Statisk metod
    Circle.cloneCircle = function(circle){
        var tmp = new Circle();
        tmp.radius = circle.radius;
        return tmp;
    }

    return { Circle : Circle };
})();



var Starter = {

	init:function()
	{
		if(!document.getElementById) return;	
		
		var obj = new HIK.util.shapes.Circle();
		obj.radius = 45;
		alert(obj.getArea());		
        
        var objClone = HIK.util.shapes.Circle.cloneCircle(obj);
        alert(objClone.getArea());
        
	}	
} 

window.onload = Starter.init;



*/
/* ------------------------------------------------------------------------------------------------------- */


