function findKthElement(array1, array2, k) {
    const mergedArray = array1.concat(array2);
    mergedArray.sort((a, b) => a - b);
    console.log(mergedArray);
    return mergedArray[k - 1];
  }
  
  const array1 = [100, 112, 256, 349, 770];
  const array2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  
  const result = findKthElement(array1, array2, k);
  console.log(result);
  