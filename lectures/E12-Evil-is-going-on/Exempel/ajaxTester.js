AjaxTester = {
	
	init:function()
	{
		var productLinks = document.getElementById("productListing").getElementsByTagName("a");
		
		for(var i=0; i < productLinks.length; ++i)
		{
			productLinks[i].onclick = AjaxTester.onProductLinkClicked;	
		}		
	},
	
	onProductLinkClicked:function(e)
	{
		var url = this.href;
		var containerID = "textId1";
		
		if(ajaxCon.readData(containerID, url))
		{
			// Allt gick bra. Returnera false för att inte aktivera länken.
			return false;
		}
		
		// Oväntat fel. Se till att a-taggen aktiveras
		return true;
	}

}

window.onload = AjaxTester.init;


