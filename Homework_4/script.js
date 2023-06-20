function findKElement(array1, array2, k) {
    const newArray = array1.concat(array2);
    newArray.sort((a, b) => a - b);
    console.log(newArray);
    return newArray[k - 1];
  }
  
  const array1 = [100, 112, 256, 349, 770];
  const array2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 7;
  
  const result = findKElement(array1, array2, k);
  console.log(result);
  
