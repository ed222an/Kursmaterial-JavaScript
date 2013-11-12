AjaxTester = {
	
	init:function()
	{
		var productLinks = document.getElementById("productListing").getElementsByTagName("a");
		
		for(var i=0; i < productLinks.length; ++i)
		{
			productLinks[i].onclick = AjaxTester.onProductLinkClicked;	
		}		
		
		document.getElementById("timer").onclick = function(e){
				e.preventDefault();
				var url = this.href;
				
				setInterval(function(){
					var container = document.getElementById("textId1");
					
					new AjaxCon(url, function(data){
						container.innerHTML = data;
					});
					
					return false;
				}, 2000);
			};	
		
		
		
		document.getElementById("json").onclick = function(e){
				
				e.preventDefault();
				
				var url = this.href;
				
				var container = document.getElementById("textId1");
				
				new AjaxCon(url, function(data){
					
					var people = JSON.parse(data);
					var tmpStr = "";
					for(var i in people){
						tmpStr += "<p>"+people[i].name+" är av typen "+people[i].type+"</p>";
					}
					container.innerHTML =tmpStr; 
				});
				
				return false;
			
		};
		
		
	},
	
	onProductLinkClicked:function(e)
	{
		
		var url = this.href;
		var container = document.getElementById("textId1");
		
		new AjaxCon(url, function(data){
			container.innerHTML = data;
		});
		
		return false;
	}

};

window.onload = AjaxTester.init;


