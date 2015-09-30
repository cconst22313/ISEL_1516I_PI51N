/**
 * Created by cconstantino on 29-09-2015.
 */

/*
    Primeira abordagem a um Crawler.

    Este JS ter� o objecto que tem a reposnsabilidade de come�ar com o processo.

    A ser usado, pretende-se que seja qualquer coisa como:
        var crawler = new Crawler("https://adeetc.thothapp.com/classes/PI/1516i/LI51N/info",5);
        crawler.start();

 */

"use strict";
require('http');

//Defeni��o de objecto Crawler
var Crawler = function Crawler(host, depth) {
    var crawler = this; //por causa do contexto de execu��o

    crawler.host = host || "https://adeetc.thothapp.com/classes";
    crawler.depth = depth || 5;
};

//Exetende Crawler com o m�todo start()
Crawler.prototype.start = function () {
    console.log("Start crawling " + crawler.host);

    console.log("Crawling endend of" + crawler.host);
};

var crawler = new Crawler("https://adeetc.thothapp.com/classes", 2);
crawler.start();

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/index.html'
};

var http = require('http');
http.get(options, function (res) {
    console.log("Got response: " + res.statusCode);
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});

//# sourceMappingURL=crawler-compiled.js.map