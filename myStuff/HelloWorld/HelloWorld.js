/**
 * Created by cconstantino on 25-09-2015.
 */
"use strict"    // http://www.w3schools.com/js/js_strict.asp
                // Strict mode makes it easier to write "secure" JavaScript.
                // Strict mode changes previously accepted "bad syntax" into real errors.

console.log("Hello world");
console.log("viva");

//var f = (msg) => console.log(msg) // Arrow functions (o mmo que Lambdas) -- Só para >= ES 6the edition
var f = function (msg) {
    console.log(msg)
}

// str = "ISEL" // O strict mode impede a utilização de str SEM uma das keywords: var, let ou const
var str = "ISEL"

f(str)
