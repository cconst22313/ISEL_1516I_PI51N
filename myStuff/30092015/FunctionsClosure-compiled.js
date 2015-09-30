/**
 * Created by cconstantino on 30-09-2015.
 */
"use strict";

//Crie-se uma fun��o, nome f
//Como uma declara��o de uma fun��o � uma instru��o e uma fun��o contem instru��es,
//podemos ter fun��es dentro de fun��es
//o scope da Fun��o inicia-se quando � invocada
//quando a fun��o termina, deixa-se de ter acesso �s suas propriedades
//o que o contexto tem:
// - parametros
// - this
// - todas as vari�veis locais
//--> o contexto s� � limpo quando a vari�vel que referencia a fun��o deixa de a referenciar.
//--> ter cuidado.... tem que se limpar as vari�veis, caso contr�rio vai ficando mem�ria presa para nada
function f(a, b) {
    //pode ser usada em todo o contexto em que foi definido.
    var local = 10;
    //var a = new Array();
    var a = [];

    //"todos os fors que s�o necess�rios j� foram feitos"
    for (var i = 0; i < 10; ++i) {
        a[i] = function () {
            return i;
        };
    }
    return a;
}
var aret = f();

//vai retornar 10 10, pois o i est� no contexto da fun��o...
//assim quando a fun��o f retornar, o i est� com 10... :)
for (var i = 0; i < aret.length; ++i) {
    console.log(aret[i]());
}

//como � que se conseguia ter uma sequencia de 1 a 10?
//tem que se criar um novo contexto para cada i, isso consegue-se com
//fun��es!
function f2(a, b) {
    //pode ser usada em todo o contexto em que foi definido.
    var local = 10;
    //var a = new Array();
    var a = [];

    //"desta forma estamos conseguimos ter uma fun��o
    //diferente por cada itera��o do for
    for (var i = 0; i < 10; ++i) {
        a[i] = (function (myi) {
            //cria uma fun��o para criar um contexto
            return function () {
                //serve para retornar a fun��o
                return myi;
            };
        })(i);
    }
    return a;
}
var aret2 = f2();

//vai retornar 10 10, pois o i est� no contexto da fun��o...
//assim quando a fun��o f retornar, o i est� com 10... :)
for (var i = 0; i < aret2.length; ++i) {
    console.log(aret2[i]());
}

//se for em ECMAScript 6!!!! j� tem coisas giras... no caso � ver o LET
function f3(a, b) {
    //pode ser usada em todo o contexto em que foi definido.
    var local = 10;
    //var a = new Array();
    var a = [];

    //"todos os fors que s�o necess�rios j� foram feitos"

    var _loop = function (_i) {
        a[_i] = function () {
            return _i;
        };
    };

    for (var _i = 0; _i < 10; ++_i) {
        _loop(_i);
    }
    return a;
}
var aret3 = f3();

//vai retornar 10 10, pois o i est� no contexto da fun��o...
//assim quando a fun��o f retornar, o i est� com 10... :)
for (var i = 0; i < aret3.length; ++i) {
    console.log(aret3[i]());
}

//# sourceMappingURL=FunctionsClosure-compiled.js.map