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
// o retorno � Undefined e 5.
//O que o interpretador de script faz � precorrer todo o script. declara todas as vari�veis n�o dando erro.
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
    f1();                   //Assim d� erro porque a vari�vel f1 ainda n�o foi inicializada!
    var a = 5;
    console.log(a);

    var f1 = function (){
        console.log("f1");
    }
    f1();
}

f();*/

//Mas se fizermos desta forma podemos ver o porqu�:
function f() {
    console.log(a); //undefined
    console.log(f1()); //undefined
    var a = 5;
    console.log(a); //5

    var f1 = function f1() {
        console.log("f1");
    };
    f1(); //f1
}

f();

//# sourceMappingURL=FunctionMemoising-compiled.js.map