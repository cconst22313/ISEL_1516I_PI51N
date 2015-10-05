"use strict";

function f(a, b) {
    var a = [];

    //for(var i = 0; i < 10; ++i) {
    //    a[i] = function (myi) {
    //        return function() {
    //            return myi;
    //        };
    //    }(i);
    //}

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

var aret = f();

for (var i = 0; i < 10; ++i) {
    console.log(aret[i]());
}

//# sourceMappingURL=FunctionsClosure-compiled.js.map