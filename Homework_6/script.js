function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
}

const myArray = [4, 2, 7, 1, 3, 6, 5];
const sortedArray = quicksort(myArray);
console.log(sortedArray);
