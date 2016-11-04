function map (array, callback) {
  var temp = [];
  for (i = 0; i < array.length; i++){
    temp.push(callback(array[i]));
  }
  return temp;
}


console.log(map(["ground", "control", "to", "major", "tom"], function(elm){
  return elm.length;
}));