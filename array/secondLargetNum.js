// finding the second largest number in the array
//1---> find the largest value
// 2---> find the index of that value
// 3---> delete index of the array using splice
// 4--->apply the same logic to find the largest array

const findMax = (arr) => {
    // return arr.reduce((pre, cur) => pre > cur ? pre : cur)
    return Math.max(...arr)
}
const findSecondLargest = (arr) => {
    const largest = findMax(arr)
    const index = arr.indexOf(largest);
    arr.splice(index, 1);
    const secondLargest = findMax(arr)
    console.log(`seocnd largest number is ${secondLargest}`)
}

findSecondLargest([1,3,45, 67, 44])