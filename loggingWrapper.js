var wrapLog = function (callback, name) {
  return function(arg1, arg2){
    console.log(name + "(" + arg1 + ',' + arg2 + ")" + " => " + callback(arg1, arg2));
  }

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

var multi = function (a,b) {return a*b};
var logMulti = wrapLog(multi, "multi");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
wrapLog(sum, "sum")(5,6);
logMulti(4,5);