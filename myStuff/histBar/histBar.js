/**
 * Created by cconstantino on 28-09-2015.
 */



var histBar = function(){
    var series = [10, 5, 13, 15];

    var elements = document.getElementsByTagName("DIV");
    var container = document.getElementById("histContainer");
    for (var i=0; i<series.length; i++){
        var div1 = document.createElement("div");
        div1.className = "div1";
        var span1 = document.createElement("span");
        span1.className = "span1";
        var span2 = document.createElement("span");
        span2.className = "span2";


        div1.setAttribute("style","padding:5px;width:100%");
        span1.textContent = i+"";
        span1.setAttribute("style","background-color: crimson;display: inline-block;width:"+series[i]+"%");
        span2.textContent = series[i]+"";

        div1.appendChild(span1);
        div1.appendChild(span2);

        //div2.appendChild(div);
        //div2.appendChild( value );
        container.appendChild( div1 );

    }
};
