/* I denna fil körs vår applikation. Här kan du enkelt exprimentera med vår "klass" Robot
 * 
 */


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