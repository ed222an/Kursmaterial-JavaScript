var changesNotSaved = 1;


window.onbeforeunload = function(){
	if(changesNotSaved){
	   return "Du har inte sparat dina ändringar!";
	}
};


