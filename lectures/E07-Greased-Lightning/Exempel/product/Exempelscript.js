var ProductViewer = {
   

    init:function()
    {
		
		// Hämta ut samtliga rubriker som ska vara klickbara
		var productNodes = document.getElementsByTagName("div");
		
		for(var i = 0; i < productNodes.length; ++i)
		{
			if(productNodes[i].className == "product")
			{
				// Hittade en korrekt div-taggg

				// Hämta h3-noden:
				var h3Node = productNodes[i].getElementsByTagName("h3")[0];

				var aNode = document.createElement("a");
				aNode.setAttribute("href", "#");
	
				// Flytta texten från H3-taggen till a-taggen
				aNode.innerHTML = h3Node.innerHTML;
				h3Node.innerHTML = "";
				
				aNode.onclick = ProductViewer.showProduct;
				
				// Lägg till a-taggen i dokumentet
				h3Node.appendChild(aNode);
				
				// Hämta divtaggen som ska gömmas:
				var divNode = productNodes[i].getElementsByTagName("div")[0];
				
				divNode.style.display = "none";
				
			}
		}
		
		
    },
	
	showProduct:function(e)
	{
		// Hämta ut den omslutande div-taggen
		var productNode = this.parentNode.parentNode;
		
		var infoNode = productNode.getElementsByTagName("div")[0];
		
		if(infoNode.style.display == "block")
		{
			infoNode.style.display = "none";
		}
		else
		{
			infoNode.style.display = "block";
		}
		
	}


} // End DOMTester


window.onload = ProductViewer.init;







