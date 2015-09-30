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

    function internal() {
        console.log("internal: a:" + a + "; b:" + b + "; local:" + local);
        ++local;++a;++b;

        //tem acesso a todos os contextos at� ao contexto global
        //function moreinternalyet(){
        //    console.log("more internal yet");
        //}
        //return moreinternalyet;
    }

    //retorna a referencia para a fun��o
    return internal;
}

//Chamar a fun��o
var ret = f(5, 6);
var ret2 = f(10, 20);

ret(); //internal: a:5; b:6; local:10
ret2(); //internal: a:10; b:20; local:10
ret(); //internal: a:6; b:7; local:11

//# sourceMappingURL=Functions-compiled.js.map