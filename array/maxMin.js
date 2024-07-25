// const findMax = (arr) => {
//     return arr.reduce((pre, cur) => pre > cur ? pre : cur)
// }

const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) return max = arr[i]
    }
}

// const findMin = (arr) => {
//     return arr.reduce((pre, cur) => pre < cur ? pre : cur)
// }

const findMin = (arr) => {
   let min = arr[0];
   for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) return min = arr[i]
   }
}

console.log(findMax([100, 34, 35, 200, 56]))
console.log(findMin([100, 34, 35, 200, 56]))