"use strict";

function f(a, b) {
    var local = 10;

    function internal() {
        var localInternal = "abc";
        console.log("internal function - a: " + a + "; b: " + b + "; local: " + local);
        ++local;++a;++b;
    }

    return internal;
}

var ret = f(5, 6);

var ret1 = f(10, 20);

var miy = ret();
ret1();

ret();

var foo = ret;

ret = null;

//# sourceMappingURL=Functions-compiled.js.map

//# sourceMappingURL=Functions-compiled-compiled.js.map