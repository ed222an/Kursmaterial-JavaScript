## Inledning
Genom att öva sig på de grundläggande koncepten i JavaScript öppnas vägen allteftersom till de mer avancerade funktionerna. Man måste lära sig krypa innan man kan gå, även i JavaScript!

## Mål
Efter du genomfört och blivit godkänd på laborationen har du kunskaper i att förstå grundläggande begrepp inom JavaScript. V


Du kommer även ha kunskaper om objekten String, Math, Array och Date. Vidare han du också kombinera funktionaliteten hos objekten för att skapa dynamiska JavaScript.



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

### ![](https://coursepress.lnu.se/program/webbprogrammerare/wp-content/plugins/coursepress/icons/24/star_yellow.png) Stjärnuppgift
Lös uppgiften utan att använda någon av looparna: for, while, do...while eller villkorssatserna if, switch.