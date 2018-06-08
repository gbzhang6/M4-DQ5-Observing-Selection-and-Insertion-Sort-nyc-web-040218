function selectionSort(arr) {
  var arraySize = arr.length
  for (var i = 0; i < arraySize - 1; i++){
    var smallestNumber = i
    for (var j = i + 1; j < arraySize; j++){
      if (arr[j] < arr[smallestNumber]){
        smallestNumber = j
      }
    };
    if (smallestNumber != i){
      var tempNumber = arr[i]
      arr[i] = arr[smallestNumber]
      arr[smallestNumber] = tempNumber
    }
  }
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  return arr
}
