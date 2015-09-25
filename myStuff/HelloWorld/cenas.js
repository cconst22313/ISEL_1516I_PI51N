//cria uma Função com nome x que faz o mesmo que o método console.log
var x = console.log;

x("Hipotéticamente serão 34");

//"redefine" o método console.log(...).
(function () {
    var MODULE_NAME = "functiontests.js";
    var oldConsoleLog = console.log; //oldConsoleLog, fica com o comportamento de console.log(...)

    // é aqui que passa a afectar o console.log como uma função...
    console.log = function(msg) {
        var NAME = MODULE_NAME || "Unknown Module";
        // new console.log
        oldConsoleLog(new Date() + " :: " + NAME + " - " + msg);
    }
})();

var x = console.log;

x("Mas o hipotéticamente será real em 2 semanas");

function visitInArray(arrayObject, observer) {
    observer = observer || console.log;

    for(var i = 0; i < arrayObject.length; ++i) {
        var elem = arrayObject[i];
        observer(elem);
    }
}

visitInArray([33, "SLB", function () { var x; }, { a: 20}]);
