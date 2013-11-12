
window.onload = function(){

	var form = document.getElementById("theForm");
	var charCounter = document.getElementById("charCounter");
	
	
	form.elements["test"].onfocus = function(){
		
		this.select();
		
	}
	
	form.elements["text"].onkeyup = function(){
		charCounter.innerHTML = this.value.length;
	}
	
/*	form.elements["text"].onkeypress = function(){
		if(this.value.length >= 10) {
			return false;			
		}
	}*/
	
	// Chromefix för ovanstående
	form.elements["test"].onmouseup = function(){return false;}
	
	form.onsubmit = function(){
		
		
		form.elements["test"].readOnly = true;
		form.elements["send"].disabled = true;
		form.elements["send"].value = "Skickar...";
		
		//return false;
		
		
	};
};
