function insertionSort(arr) {
  console.log(arr)
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++){
    let z = i - 1
    let value = arr[i]
    for (z; z > -1 && arr[z] > value; z--){
      arr[z+1] = arr[z]
    }
    arr[z+1] = value
  }
  return arr
}
