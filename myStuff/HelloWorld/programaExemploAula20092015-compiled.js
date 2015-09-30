/**
 * Created by cconstantino on 28-09-2015.
 */
"use strict";
//A forma mais simples
// a fun��o tem parametros formais
function sum(x, y) {
    return x + y;
}

// invoca��o:
// ao invocar os parametros, s�o os actuais - s�o express�es passadas
sum(sum(2, 3), sum(4, 5));
sum(5, 6);
sum(7, 8);

function sayHello(message) {
    if (message) {
        console.log("Hello " + message);
        return message;
    } else undefined; //N�O FAZER!!!! � TOTOZICE!
}

console.log(sayHello("SLB"));
console.log(sayHello());
console.log(sayHello("SLB", 10, 20, 30));

function showAllArguments() {
    console.log("~~~~~~~~~~~~~~~ 0 ~~~~~~~~~~~~~~~~~~~");
    for (var i = 0; i < arguments.length; i++) {
        console.log('Arguments[' + i + '] = ' + arguments[i]);
    }
}

showAllArguments();
showAllArguments("SLB", 10, 20, 30);
showAllArguments("SLB", " � o MAIOR!!!");

function showAllArguments() {
    console.log("~~~~~~~~~~~~~~~~ 1 ~~~~~~~~~~~~~~~~~~");
    for (var i = 0; i < arguments.length; i++) {
        console.log('Arguments[' + i + '] = ' + arguments[i]);
        console.log("Arguments[" + i + "] = " + arguments[i]);
    }
}

showAllArguments();
showAllArguments("SLB", 10, 20, 30);
showAllArguments("SLB", " � o MAIOR!!!");

//# sourceMappingURL=programaExemploAula20092015-compiled.js.map