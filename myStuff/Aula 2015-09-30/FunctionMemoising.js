/**
 * Created by cconstantino on 05-10-2015.
 */

"use strict";

/*
function f() {
    console.log(a);         //undefined
    var a = 5;
    console.log(a);         //5
}

f();
*/
// o retorno é Undefined e 5.
//O que o interpretador de script faz é precorrer todo o script. declara todas as variáveis não dando erro.
//
//faz o equivalente a:
/*    function f() {
        var a;
        console.log(a);
        a = 5;
        console.log(a);
    } */

//MAS:
//se tivermos:
/*
function f() {
    console.log(a);             //undefined
    f1();                       //f1
    var a = 5;
    console.log(a);             //5

    function f1(){
        console.log("f1");
    }
    f1();
}

f();
*/
/*
function f() {
    console.log(a);         //undefined
    f1();                   //Assim dá erro porque a variável f1 ainda não foi inicializada!
    var a = 5;
    console.log(a);

    var f1 = function (){
        console.log("f1");
    }
    f1();
}

f();*/

//Mas se fizermos desta forma podemos ver o porquê:
function f() {
    console.log(a);         //undefined
    console.log(f1());      //undefined
    var a = 5;
    console.log(a);         //5

    var f1 = function (){
        console.log("f1");
    }
    f1();                   //f1
}

f();

