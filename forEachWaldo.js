// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(word, i) {
    if (word === "Waldo"){
      found(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at index: " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);