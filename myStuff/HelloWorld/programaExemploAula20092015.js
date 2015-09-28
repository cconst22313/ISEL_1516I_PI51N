/**
 * Created by cconstantino on 28-09-2015.
 */
"use strict";
//A forma mais simples
// a função tem parametros formais
function sum(x, y){
    return x + y;
}

// invocação:
// ao invocar os parametros, são os actuais - são expressões passadas
sum(sum(2,3), sum(4,5));
sum(5, 6);
sum(7, 8);


function sayHello(message){
    if (message) {
        console.log("Hello " + message)
        return message;
    } else undefined; //NÃO FAZER!!!! É TOTOZICE!

}

console.log(sayHello("SLB"));
console.log(sayHello());
console.log(sayHello("SLB",10, 20, 30));

function showAllArguments(){
    console.log("~~~~~~~~~~~~~~~ 0 ~~~~~~~~~~~~~~~~~~~");
    for( var i = 0; i < arguments.length; i++){
        console.log('Arguments['+i+'] = '+arguments[i]);
    }
}

showAllArguments();
showAllArguments("SLB",10, 20, 30);
showAllArguments("SLB"," É o MAIOR!!!");


function showAllArguments(){
    console.log("~~~~~~~~~~~~~~~~ 1 ~~~~~~~~~~~~~~~~~~");
    for( var i = 0; i < arguments.length; i++){
        console.log('Arguments['+i+'] = '+arguments[i]);
    }
}

showAllArguments();
showAllArguments("SLB",10, 20, 30);
showAllArguments("SLB"," É o MAIOR!!!");