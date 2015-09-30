/**
 * Created by cconstantino on 30-09-2015.
 */
"use strict";

//Crie-se uma função, nome f
//Como uma declaração de uma função é uma instrução e uma função contem instruções,
//podemos ter funções dentro de funções
//o scope da Função inicia-se quando é invocada
//quando a função termina, deixa-se de ter acesso às suas propriedades
//o que o contexto tem:
// - parametros
// - this
// - todas as variáveis locais
//--> o contexto só é limpo quando a variável que referencia a função deixa de a referenciar.
//--> ter cuidado.... tem que se limpar as variáveis, caso contrário vai ficando memória presa para nada
function f(a,b){
    //pode ser usada em todo o contexto em que foi definido.
    var local = 10;
    //var a = new Array();
    var a =[];

    //"todos os fors que são necessários já foram feitos"
    for(var i = 0; i<10; ++i){
        a[i] = function(){ return i; };
    }
    return a;
}
var aret = f();

//vai retornar 10 10, pois o i está no contexto da função...
//assim quando a função f retornar, o i está com 10... :)
for(var i = 0; i<aret.length; ++i){
    console.log(aret[i]());
}

//como é que se conseguia ter uma sequencia de 1 a 10?
//tem que se criar um novo contexto para cada i, isso consegue-se com
//funções!
function f2(a,b){
    //pode ser usada em todo o contexto em que foi definido.
    var local = 10;
    //var a = new Array();
    var a =[];

    //"desta forma estamos conseguimos ter uma função
    //diferente por cada iteração do for
    for(var i = 0; i<10; ++i){
        a[i] = function(myi){   //cria uma função para criar um contexto
            return function(){  //serve para retornar a função
                return myi;
            }
        }(i);
    }
    return a;
}
var aret2 = f2();

//vai retornar 10 10, pois o i está no contexto da função...
//assim quando a função f retornar, o i está com 10... :)
for(var i = 0; i<aret2.length; ++i){
    console.log(aret2[i]());
}


//se for em ECMAScript 6!!!! já tem coisas giras... no caso é ver o LET
function f3(a,b){
    //pode ser usada em todo o contexto em que foi definido.
    var local = 10;
    //var a = new Array();
    var a =[];

    //"todos os fors que são necessários já foram feitos"
    for(let i = 0; i<10; ++i){
        a[i] = function(){ return i; };
    }
    return a;
}
var aret3 = f3();

//vai retornar 10 10, pois o i está no contexto da função...
//assim quando a função f retornar, o i está com 10... :)
for(var i = 0; i<aret3.length; ++i){
    console.log(aret3[i]());
}
