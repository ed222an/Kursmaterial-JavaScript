var DOMTester = {
   

    init:function()
    {
	
		// Exempel 1
		/*
		var element = document.getElementById("menu");
		alert("Name of #menu-element: "+element.nodeName);

		var elements = document.getElementsByTagName("li");
		alert("Number of li-elements: "+elements.length);
		
		elements = document.getElementsByTagName("ul");
		alert("Number of ul-elements: "+elements.length);
		
		// Hämtar ut samtliga li-element i den första ul-taggen
		elements = elements[0].getElementsByTagName("li");
		alert("Number of li-elements: "+elements.length);
		*/
		
		// Exempel 1.1
		
		var elements = document.querySelectorAll("#subcontent a");
		console.log(elements.length);
		
		// Exempel 2
		/*
		var node = document.getElementById("content");
		var ps = node.getElementsByTagName("p");
		
		alert(ps[0].firstChild.nodeValue);
		
		// Observera att vi inte kan använda nodeValue för att lägga till nya taggar i DOMen.
		ps[0].firstChild.nodeValue = "Nu är <strong>texten</strong> i första paragrafen ändrad till det här!";
		*/
		
		
		// Exempel 3
		// Vad händer om du kör denna i IE kontra FireFox eller Opera?
		/*
		var ul = document.getElementById("menu").getElementsByTagName("ul")[0];
		
		var tmpString = new String();
		
		for(var i = 0; i < ul.childNodes.length; ++i)
		{
		
		    // if(ul.childNodes[i].nodeType == 1)
			tmpString += ul.childNodes[i].nodeName+"\n";
		}
		
		alert(tmpString);
		*/

		// Exempel 4
		// Observera att IE?7? inte bara ändrar href-attributet utan även länktexten. En säkerhetsdetalj?
		
		// Ett sätt (äldre) att sätta attribut på. Väldigt enkelt och trevligt.
		/*
		var node = document.getElementById("subcontent").getElementsByTagName("a")[0];
		node.href = "http://www.hik.se";
		node.class = "link"; // Fungerar inte
		node.className = "link"; // Måste användas istället

		// Att göra samma sak enligt DOM-standarden.
		node = document.getElementById("subcontent").getElementsByTagName("a")[1];
		node.setAttribute("href", "http://www.sunet.se");
		node.setAttribute("class", "link");
		*/
		
		// Exempel 5
		/*
		var node = document.getElementById("subcontent").getElementsByTagName("ul")[0];
		
		var newNode = node.cloneNode(true);
		
		document.getElementById("subcontent").appendChild(newNode);
		*/
		
		
		// Exempel 6
		/*
		var node = document.getElementById("maincontent");
		
		node.innerHTML += "<h2>En rubrik längst ned på sidan</h2><p id='myP' >Följd av en p-tagg med attributet id satt.</p>";
		
		node  = document.getElementById("myP");
		
		alert(node.firstChild.nodeValue);
		*/


    }

} // End DOMTester


window.onload = DOMTester.init;







