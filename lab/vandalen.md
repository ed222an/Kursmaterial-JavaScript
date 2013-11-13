## Inledning
Genom att öva sig på de grundläggande koncepten i JavaScript öppnas vägen allteftersom till de mer avancerade funktionerna. Man måste lära sig krypa innan man kan gå, även i JavaScript!

## Mål
Efter du genomfört och blivit godkänd på laborationen har du kunskaper i att förstå grundläggande begrepp inom JavaScript. V


Du kommer även ha kunskaper om objekten String, Math, Array och Date. Vidare han du också kombinera funktionaliteten hos objekten för att skapa dynamiska JavaScript.

## Uppgift X - Gissa det hemliga talet
En klassiker i programmeringskurser och en uppgift som du kommer att få göra många gånger. Spelet, gissa det hemliga talet. 

Din uppgift blir att färdigställa funktionen "guess" som du hittar i katalogen "gissatalet" i laborations-reprot.

Katalogen består av två filer:

* index.html, _med ett formulär där vi kan skriva gissningar._
* script.js, _Kod för att hantera formuläret och den funktion som du ska skriva koden till._

Spelet går ut på att datorn slumpar ett hemligt tal mellan 1 och 100 och låter sedan användaren gissa sig till talet. Om talet användaren gissade på är lägre än det hemliga talet ska ett meddelande visas som talar om för användaren att det hemliga numret är högre än gissningen, likadant ska ett meddelande visas om gissningen var för hög. Användaren ska få gissa på det hemliga numret tills det att rätt nummer gissas. När spelet är slut ska ett meddelande visas som innehåller det hemliga numret och det antal gissningar användaren behövde för att hitta det hemliga numret.

Några korta krav:

* Funktionen _guess_ ska vara en funktion utan sidoeffekter. ("Pure function")
* Information om parametrar och returvärden finns i js-filen.
* Programmet behöver hålla reda på hur många gissningar som gjorts.

### ![][info] Tips
För att slumpa ett tal mellan 1 och 100 kan du använda dig av följande kodstycke.

```js
Math.floor( Math.random() * (length + 1) )+min;
Math.floor( Math.random() * 101)+1;
```

Om du är osäker på hur Math.floor() och Math.random() fungerar så hittar du information om funktionerna i kurslitteraturen eller i föreläsningsmaterialet.

## Uppgift X
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

```js
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
```


### Returvärde:
Objektet som returneras ska innehålla fyra egenskaper:	

* minAge **- nummer innehållande den ålder i de inskickade objekten som är lägst.**
* maxAge **-nummer innehållande den ålder i de inskickade objekten som är högst.**
* avarageAge - **nummer innehållande medelåldern (avrundat nedåt ;)) av de inskickade objektens ålder.**
* names  **- sträng innehållande samtliga personers namn separerade med ", " (komma och efterföljande mellanslag). Namnen sorteras i bokstavsordning.**

Testa genom att skriva ut resultatet till konsolen:

```js
var makePerson(persArr) {
   result = {};

   // Lös uppgiften

   return result;
}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
```

### Exempel på resultat:
<img class="size-full wp-image-541 aligncenter" src="http://coursepress.lnu.se/kurs/webbteknik-i/files/2012/11/2012-11-29-09-16-41.png" alt="" width="727" height="80" />

### ![][star] Stjärnuppgift
Lös uppgiften utan att använda någon av looparna: for, while, do...while eller villkorssatserna if, switch.

[star]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/star_yellow.png

[info]:https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/16/information.png