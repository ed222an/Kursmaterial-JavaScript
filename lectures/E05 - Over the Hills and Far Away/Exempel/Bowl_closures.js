
function BowlingGame(players){
	
	this.getPlayers = function(){return players;};
	this.getPlayer = function(n){return players[n];};
	this.setPlayers = function(_players){
	
		if(!(_players instanceof Array)){
			throw Error("BowlingGame takes an array as argument");
		}
		
		for(player in players){
			if(!(players[player] instanceof Player)){
				throw Error("The players array must contain instances of Player");
			}			
		}

		players = _players;
	};
	this.setPlayers(players);


	this.pins = [];

/* Sämre lösning: funktionen som har n i parameterlistan kommer att behöva skapas för varje itteration. */
/*	for(var i = 1; i <= 10; ++i){
		
		this.pins[i] = function(n){
			return function(){
				alert("I am pin " + n);
			};
		}(i);
	}
*/

/* SLIDE: Closure lösning */
	var initPins = function(n){
		return function(){
			alert("I am pin "+n);			
		};
	};
	
	for(var i = 1; i <= 10; ++i){
		this.pins[i] = initPins(i);
	}
	
/*	for(var i = 1; i <= 10; ++i){
		
		this.pins[i] = function(){
			alert("I am pin "+i);
		}
		
	}
	*/
	
}

BowlingGame.prototype.play = function(){
	
	for(var rounds = 0; rounds < 50; rounds++){
		for(var player = 0; player < this.getPlayers().length; player++){
			this.getPlayer(player).addPoint(hit());
		
		}
	}
	
	this.showScoreBoard();
	
	function hit(){
		var point =  Math.floor( Math.random() * 10)+1;
		return point;
	}
	
	
};

BowlingGame.prototype.showScoreBoard = function(){
	
	document.write("<h3>Scoreboard:</h3>");
	for(var player = 0; player < this.getPlayers().length; player++){
		var p = this.getPlayer(player);
		document.write(p.getName()+": "+p.getScore()+"<br />");
	
	}
	
	
	function hit(){
		var point =  Math.floor( Math.random() * 10)+1;
		return point;
	}
	
	
};
