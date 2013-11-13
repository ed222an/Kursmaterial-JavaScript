
// Map
var n = ["Nisse", "Janne", "Ellen", "Lisa"].map(function(name){ return "Namnet " + name; });

console.log(n); //["Namnet Nisse", "Namnet janne", "Namnet Ellen", "Namnet Lisa"]


// Reduce
n = [20, 30, 11, 56].reduce(function(a,b){ return a+b; });

console.log(n); // 117 (20+30+11+56)

// Filter
n = [20, 30, 11, 56].filter(function(tal){ return tal >= 20; });

console.log(n); // [20, 30, 56]]

