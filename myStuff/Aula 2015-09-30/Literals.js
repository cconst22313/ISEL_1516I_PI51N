/**
 * Created by cconstantino on 05-10-2015.
 */
//Como se criam objectos?
//
//1. Literal: (deffenição literal de um objecto
var o = {
    //um campo pode ter uma expressão
    f1: 5,
    f2: "abc",
    f3: function(a) { return "Hello " + a },
    //pode ter outro objecto!
    f4: { a: "SLB" },
    f5: [5,"SLB", {}, function() {}, []]
};

//Existe de forma não literal, na forma de objecto:
var n = new Number(5);
var str = new String("Benfica");
var f = new Function("a","b", "return a*b");  //<- Não vamos usar porque é menos eficiente e só deve ser usado em casos específicos
//console.log(f(2,3));                         // serve para criar código em tempo de execução!!!!