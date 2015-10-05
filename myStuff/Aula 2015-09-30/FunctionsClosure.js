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

    for(let i = 0; i < 10; ++i) {
        a[i] = function() {
            return i;
        };
    }


    return a;
}


var aret = f();


for(var i = 0; i < 10; ++i) {
    console.log(aret[i]());
}








