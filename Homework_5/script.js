function mergeSort(array){
    if (array.length <= 1){
        return array
    }
    let mid = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, mid)
    let rightHalf = array.slice(mid)
    let sortedLeft = mergeSort(leftHalf)
    let sortedRight = mergeSort(rightHalf)
    return merge(sortedLeft, sortedRight)
}
function merge(left, right){
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        } else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    while(leftIndex < left.length){
        result.push(left[leftIndex])
        leftIndex++
    }
    while(rightIndex < right.length){
        result.push(right[rightIndex])
        rightIndex++
    }
    return result
}

let array = [1, 15, 24, 78, 4, 10, 21, 69, 2, 100]
let sortedArray = mergeSort(array)
console.log(sortedArray);