/**
 * Created by cconstantino on 28-09-2015.
 */
//My study of Fucntions... and how to call them

//1st: Literal Function:
console.log(">>> Literal Function");
var add = function(a,b){
    return a+b;
};

//invocação de literais
console.log("Resultado de uma Literal Fucntion:" + add(1,5));

//Method Invocation Pattern:
console.log(">>> Method Pattern");
var myObject = {
    value : 0,
    increment : function (inc){
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

console.log("no parameter");
myObject.increment();
console.log("myObject.value = " + myObject.value);
console.log("parameter = 2");
myObject.increment(2);
console.log("myObject.value = " + myObject.value);


//Fucntion invocation Pattern
console.log(">>>Fucntion Invocation Pattern");
//Expandir o myObject de modo a ter encapsulamento.
//com este método conseguimos ter dentro da funcção
//o próprio ojecto
//é particularmente util quando queremos particionar
//o código ou ter métodos/funções que são executadas mais
//do que uma vez.
myObject.double = function (){
    var that = this;    //workaround;
    var helper = function() {
        that.value = add(that.value, that.value);
    };
    helper();
};

myObject.double();
console.log(myObject.value);

//aqui é um exmplo estúpido como pode ser útil um método auxiliar.
myObject.exp = function (mltp) {
    var that = this;
    var helper = function() {
        that.value = add( that.value, that.value);
        i++;
    };
    var i = 0;
    do{
        helper();
    } while ( i < mltp);

};

myObject.exp(5);
console.log(myObject.value);
