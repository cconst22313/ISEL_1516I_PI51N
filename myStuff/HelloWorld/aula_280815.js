/**
 * Created by cconstantino on 28-09-2015.
 */
var x = "SLB";

var y = x + 25;
console.log(y);

x = 20;

y = x +10;
console.log(y);

var z;
console.log(z); //undefined... não foi declardo!

var xpto = z + 20;
console.log(xpto); //not a number! supostamente deveria dar um numero, mas correu  mal

//Coisa gira:
console.log("Coisa gira nas conversões explicitas");
x="10"; console.log(x++);
x="10"; console.log(x = x + 1);