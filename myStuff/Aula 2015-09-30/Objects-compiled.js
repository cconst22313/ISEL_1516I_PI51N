/**
 * Created by cconstantino on 05-10-2015.
 */

"use strict";

var oLiteral = {}; //Javascript Object Notation (JSON)
var oObject = new Object();

console.log(oObject.a);

oObject.a = "O Maior!";

//adicionou-se uma propriedade a um objecto - � semelhante a um mapa!
console.log(oObject.a); //<-dot notation
console.log(oObject["a"]); //<-subscript notation: util para quando se sabe o que se quer aceder, mas ainda n�o existe (em tempo de codifica��o)

//Exemplo do uso do subscript notation
function showMember(o) {
    "use strict";
    for (var k in o) {
        //em k est� a chave do objecto
        console.log("key = " + k + "; Values = " + o[k]);
    }
}

showMember(console);
showMember(oObject);
delete oObject.a;
showMember(oObject);

function foo() {
    return "SLB";
};

obj = {
    foo: "bar"
};
obj["prop_" + foo()] = 42;

showMember(obj);

//# sourceMappingURL=Objects-compiled.js.map