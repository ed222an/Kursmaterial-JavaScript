/* Konstruktorfunktionen BartBoard anropas med new då vi vill skapa nya instanser av vår "BartBoard"-applikation.
 * theText - Den text vi vill ska skrivas ut på tavlan.
 * divId - id:t på den divtag som kommer att bli denna instans tavla. 
 */
function Popup(text){
	
	var div = document.createElement("div");
	
	div.className = "popupWindow";
	
	
	var p  = document.createElement("p");
	p.appendChild(document.createTextNode(text));
	div.appendChild(p);
	document.body.appendChild(div);
	
	var button = document.createElement("input");
	button.type = "button";
	button.value = "Stäng";
	div.appendChild(button);
	
	button.onclick = closePopup;
	
	function closePopup(){
				
		document.body.removeChild(div);
		
	}
	
}


/* Här har jag skrivit den kod som startar hela applikationen. 
 * Jag väljer att skapa två BartBoards men vi kan skapa hur många som helst. 
 * Testa gärna men glöm inte att även skapa divtaggar i HTML-koden.
 * Anledningen till att jag manuellt skapar divtaggarna och inte låter applikationen göra det
 * är att jag då lättare kan styra var tavlorna kommer att skrivas ut.
  */
window.onload = function(){
	
	var link = document.getElementById("popuplink1");
	
	link.onclick = function(){
		
		new Popup("Du har klickat på denna länk... Intressant");
		return false;
	}
	
	var link = document.getElementById("popuplink2");
	
	link.onclick = function(){
		
		new Popup("Helt annan information");
		return false;
	}
	
	
	 
};
