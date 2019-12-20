/*FASE 1 (2 punts)
● Crea sis variables tipu string buides. (0,5 punts)
● Demana per consola que s’introdueixin els noms. (0,5 punts)
● Introdueix els següents noms de ciutats (Barcelona, Madrid, Valencia, Malaga, Cadis, Santander) per
teclat. (0,5 punts)
● Mostra per consola el nom de les 6 ciutats. (0,5 punts)
*/
'use strict'
var ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6;
ciutat1= prompt("Introduce el nombre de la ciudad: ", 'Barcelona');
ciutat2= prompt("Introduce el nombre de la ciudad: ", 'Madrid');
ciutat3= prompt("Introduce el nombre de la ciudad: ", 'Valencia');
ciutat4= prompt("Introduce el nombre de la ciudad: ", 'Malaga');
ciutat5= prompt("Introduce el nombre de la ciudad: ", 'Cadis');
ciutat6= prompt("Introduce el nombre de la ciudad: ", 'Santander');
console.log(ciutat1,ciutat2,ciutat3,ciutat4,ciutat5,ciutat6);

/*
FASE 2 (2 punts)
● Un cop tenim els noms de les ciutats guardats en variables haurem de pasar l’informacio a un array
(arrayCiutats). (1 punt)
● Quan tinguem l’array ple, haurem de mostrar per consola el nom de les ciutats ordenadas per ordre
alfabetic. (1 punt)
*/
var arrayCiutats = [];
arrayCiutats[0]=ciutat1;
arrayCiutats[1]=ciutat2;
arrayCiutats[2]=ciutat3;
arrayCiutats[3]=ciutat4;
arrayCiutats[4]=ciutat5;
arrayCiutats[5]=ciutat6;
arrayCiutats.sort().forEach(element => console.log(element));


/*
FASE 3 (3 punts)
● Cambieu les vocals “a” dels noms de les ciutats per el numero 4 i guardeu els noms modificats en un nou
array(ArrayCiutatsModificades). (2 punts)
● Mostreu per consola l’array modificat i ordenat per ordre alfabetic. (1 punt)
*/

var ArrayCiutatsModificades= [];

for(var i=0;i<arrayCiutats.length;i++){
   ArrayCiutatsModificades[i]=arrayCiutats[i].replace(/a/g,'4'); 
}                
ArrayCiutatsModificades.sort().forEach(element => console.log(element));

/*FASE 4 (3 punts)

●
Creeu un nou array per cada una de les ciutats que tenim. La mida dels nous arrays sera la
llargada de cada string ( string nomCiutat.Length). (0,5 punts)
● Ompliu els nous arrays lletra per lletra.(2 punts)
● Mostreu per consola els nous arrays amb els noms invertits (Ex: Barcelona - anolecraB). (0,5 punts)
*/

var ciutatMod1= [];
var ciutatMod2= [];
var ciutatMod3= [];
var ciutatMod4= [];
var ciutatMod5= [];
var ciutatMod6= [];

for(var i=0;i<ciutat1.length;i++){
    ciutatMod1[i]=ciutat1[i].charAt();
}
for(var i=0;i<ciutat2.length;i++){
    ciutatMod2[i]=ciutat2[i].charAt();
}
for(var i=0;i<ciutat3.length;i++){
    ciutatMod3[i]=ciutat3[i].charAt();
}
for(var i=0;i<ciutat4.length;i++){
    ciutatMod4[i]=ciutat4[i].charAt();
}
for(var i=0;i<ciutat5.length;i++){
    ciutatMod5[i]=ciutat5[i].charAt();
}
for(var i=0;i<ciutat6.length;i++){
    ciutatMod6[i]=ciutat6[i].charAt();
}

console.log('\n'); 
for(var i=0;i<ciutatMod1.length;i++){
   console.log((ciutatMod1[ciutatMod1.length-i-1]));
   }
console.log('\n');   
for(var i=0;i<ciutatMod2.length;i++){
   console.log((ciutatMod2[ciutatMod2.length-i-1]));
   }
console.log('\n');    
for(var i=0;i<ciutatMod3.length;i++){
   console.log((ciutatMod3[ciutatMod3.length-i-1]));
   }
console.log('\n');    
for(var i=0;i<ciutatMod4.length;i++){
   console.log((ciutatMod4[ciutatMod4.length-i-1]));
   }
console.log('\n');    
for(var i=0;i<ciutatMod5.length;i++){
   console.log((ciutatMod5[ciutatMod5.length-i-1]));
   }
console.log('\n');    
for(var i=0;i<ciutatMod6.length;i++){
   console.log((ciutatMod6[ciutatMod6.length-i-1]));
   }               
  


   
