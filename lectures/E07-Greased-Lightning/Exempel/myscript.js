var CSSTester = {
   

    init:function()
    {
		
		// Exempel 1
		var pNode = document.getElementById("maincontent").getElementsByTagName("p")[0];
		
/*
		pNode.style.fontSize = "16px";

		// Tyvärr fungerar det inte att sätta styleattributet enligt nedan i IE.
		// Annars hade detta varit ett snyggare sätt att sätta egenskaperna på.
		pNode.setAttribute("style", "background-color:silver;color: red;");
*/
		
		// Exempel 2
/*
		pNode.className = "jsBadContrast";
*/
		// Tyvärr fungerar det inte att sätta styleattributet enligt nedan i IE.
		// Annars hade detta varit ett snyggare sätt att sätta egenskaperna på.
		// pNode.setAttribute("class", "jsBadContrast");


		// Denna kod hör till Exempel 3-5:
		document.getElementById("Information").style.display = "none";
		
		// Exempel 5
		var triggerLink = document.getElementById("subcontent").getElementsByTagName("a")[2];
		
		triggerLink.onclick = CSSTester.showInfoWindow2;
			
		// Exempel 6
		triggerLink = document.getElementById("subcontent").getElementsByTagName("a")[3];
		triggerLink.onclick = function() {
			return CSSTester.showInfoWindow2();
		}
		
		// Exempel 7
		// Se Exempel.html samt Exempelscript.js
		
		// Exempel 8
		document.getElementById("testerForm").getElementsByTagName("input")[0].onkeydown = CSSTester.keydownTest;
		
		// Exempel 9
		// Observer hur keypress hindrar användaren från att mata in något i formuläret.
		//document.getElementById("testerForm").getElementsByTagName("input")[0].onkeypress = CSSTester.keydownTest;
		
		
		// Exempel 10
		document.getElementById("coffeyImage").onclick = CSSTester.clickTester;
		
		
    },

	// Exempel 3
	showInfoWindow1:function()
	{
		// Här måste vi manuellt leta upp aktuell a-tagg. Oflexibelt
		var aNode = document.getElementById("subcontent").getElementsByTagName("a")[0];
		
		if(document.getElementById("Information").style.display == "")
		{
			aNode.innerHTML = "Visa information";
			document.getElementById("Information").style.display="none";
		}
		else
		{
			aNode.innerHTML = "Dölj information";
			document.getElementById("Information").style.display="";
		}
		
	},

	// Exempel 4 och 5
	showInfoWindow2:function()
	{

		if(document.getElementById("Information").style.display == "")
		{
			this.innerHTML = "Visa information";
			document.getElementById("Information").style.display="none";
		}
		else
		{
			this.innerHTML = "Dölj information";
			document.getElementById("Information").style.display="";
		}
		
		return false;
	},
	
	keydownTest:function(e)
	{
		if(!e) var e = window.event;
		
		var key;
		
		if(!e.keyCode) 
		    key  = e.charCode;
		else
		    key  = e.keyCode;
				
		alert(String.fromCharCode(key));	
		alert(this.nodeName);
		return false;
	},
	
	clickTester:function(e)
	{
		alert("hej");
/*		if(!e) var e = window.event;
			
		if(e.button == 2)
		{
			alert("Högerklick");
			
		}
		return false;*/
	}
	
	

} // End DOMTester


window.onload = CSSTester.init;







