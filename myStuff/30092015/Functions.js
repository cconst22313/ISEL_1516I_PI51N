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

    function internal(){
        console.log(`internal: a:${a}; b:${b}; local:${local}`);
        ++local; ++a; ++b;

        //tem acesso a todos os contextos até ao contexto global
        //function moreinternalyet(){
        //    console.log("more internal yet");
        //}
        //return moreinternalyet;
    }

    //retorna a referencia para a função
    return internal;
}

//Chamar a função
var ret = f(5,6);
var ret2 = f(10,20);

ret();      //internal: a:5; b:6; local:10
ret2();     //internal: a:10; b:20; local:10
ret();      //internal: a:6; b:7; local:11
