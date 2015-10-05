/**
 * Created by cconstantino on 05-10-2015.
 */
//Como se criam objectos?
//
//1. Literal: (deffeni��o literal de um objecto
"use strict";

var o = {
    //um campo pode ter uma express�o
    f1: 5,
    f2: "abc",
    f3: function f3(a) {
        return "Hello " + a;
    },
    //pode ter outro objecto!
    f4: { a: "SLB" },
    f5: [5, "SLB", {}, function () {}, []]
};

//Existe de forma n�o literal, na forma de objecto:
var n = new Number(5);
var str = new String("Benfica");
var f = new Function("a", "b", "return a*b"); //<- N�o vamos usar porque � menos eficiente e s� deve ser usado em casos espec�ficos
//console.log(f(2,3));                         // serve para criar c�digo em tempo de execu��o!!!!

//# sourceMappingURL=Literals-compiled.js.map