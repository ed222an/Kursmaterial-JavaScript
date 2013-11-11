/* Konstruktorfunktionen BartBoard anropas med new då vi vill skapa nya instanser av vår "BartBoard"-applikation.
 * theText - Den text vi vill ska skrivas ut på tavlan.
 * divId - id:t på den divtag som kommer att bli denna instans tavla. 
 */
function bartBoard(theText, divId){
	
	var board = document.getElementById(divId); // Vi hämtar ut tavlan som en nod.
	var charCount = 0; 							// Räknare för att hålla koll på vilken bokstav som ska skrivas ut.
	var timerID; 						// Här sparar vi undan det id vi får från setInterval för att kunna stoppa utskriften när vi vill
	
	theText += " ";								// Vi lägger till ett blanksteg efter sista tecknet för att få en snygg utskrift					
	
	// Om div-taggen inte redan har en textnod så skapar vi en och lägger till den. 
	if(board.firstChild === null){
		board.appendChild(document.createTextNode(""));
	}
	
	// Vi kopplar händelsen mousedown. Denna kod kommer alltså att köras då användaren trycker ner musknappen.
	board.onmousedown = function(e){
		
		// Ficar problem med att användaren högerklickar i samband med vänsterklick.
		clearInterval(timerID);
		
		// Vi startar en intervall-timer som kommer att köras en gång var 50e millisekund. Vi är noga med att spara undan
		// vårt värde så att vi kan stoppa timern. 
		var printChar = function(){
			// Här lägger vi till den bokstav som ligger på position charCount i strängen och ökar sedan charCount med ett.
			board.firstChild.nodeValue += theText.charAt(charCount++);
			
			// Om vi kommit till slutet av strängen ska vi börja om.
			if(charCount >= theText.length){
				charCount = 0;
			}
			
			timerID = setTimeout(printChar, 50);
		}
		
		printChar();
		
		// De två nedanstående raderna är till för att se till att texten på tavlan inte markeras när musknappen är nedtryckt.
		board.onselectstart = function () { return false; }; // IE-fix för ovanstående.
		return false; 
	};
	
	// Detta event körs när användaren släpper musknappen. Det enda vi behöver göra här är att stoppa timern.
	board.onmouseup = function(){

		clearInterval(timerID);

	};
}


/* Här har jag skrivit den kod som startar hela applikationen. 
 * Jag väljer att skapa två BartBoards men vi kan skapa hur många som helst. 
 * Testa gärna men glöm inte att även skapa divtaggar i HTML-koden.
 * Anledningen till att jag manuellt skapar divtaggarna och inte låter applikationen göra det
 * är att jag då lättare kan styra var tavlorna kommer att skrivas ut.
  */
window.onload = function(){
	
	// I detta fall kan vi välja att anropa BartBoard som en vanlig funktion eftersom vi inte nyttjar this i konstrukturfunktionen.
	bartBoard("I will not pollute the global object \"window\" more than necessary.", "board1");
	bartBoard("Douglas Crockford doesn't use JavaScript libraries. They make his code less crossbrowser compatible.", "board2");
	
	// Douglas crockford doesn't wait for onDomReady, the dom waits for him....
	// 
};
