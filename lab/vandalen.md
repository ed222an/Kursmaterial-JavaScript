Samtliga inlänkade filer ska använda ES5 strict-mode. Placera alltså koden:

```js

"use strict";

```

överst i samtliga inlänkade javascript-filer.
## Arrayer och objekt
Din uppgift är att skapa en funktion utan sidoeffekter **("pure function")** som tar en array innehållande ett godtyckligt antal objekt (personer med namn och ålder) som argument och returnerar ett nytt objekt. Det objekt som returneras ska innehålla information om den högsta åldern, lägsta åldern, medelåldern samt en sträng med samtliga namn sorterade i bokstavsordning.
### Argument:
Objekten i arrayen som skickas som argument ska innehålla två egenskaper:

* name **- sträng innehållande för- och efternamn**
* age - **nummer innehållande ålder**

Exempel på array som skickas som argument till funktionen:

[javascript]
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
[/javascript]


### Returvärde:
Objektet som returneras ska innehålla fyra egenskaper:	* minAge **- nummer innehållande den ålder i de inskickade objekten som är lägst.**
* maxAge **-nummer innehållande den ålder i de inskickade objekten som är högst.**
* avarageAge - **nummer innehållande medelåldern (avrundad) av de inskickade objektens ålder.**
* names  **- sträng innehållande samtliga personers namn separerade med ", " (komma och efterföljande mellanslag). Namnen sorteras i bokstavsordning.**

Testa genom att skriva ut resultatet till konsolen:

[javascript]

var makePerson(persArr) {
   result = {};

   // Lös uppgiften

   return result;
}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
[/javascript]

### Exempel på resultat:
<img class="size-full wp-image-541 aligncenter" src="http://coursepress.lnu.se/kurs/webbteknik-i/files/2012/11/2012-11-29-09-16-41.png" alt="" width="727" height="80" />

### Stjärnuppgift
Lös uppgiften utan att använda någon av looparna: for, while, do...while eller villkorssatserna if, switch.