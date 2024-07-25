// 1ST METHOD USING INBUILD FUNCTIONS
// const findDuplicate = (arr) => {
//     return arr.filter((ele, index, arr) => arr.indexOf(ele) !== index);
// }

// 2ND METHOD WITHOUT USING ANY INBUILD FUNCTIONS
const findDuplicate = (arr) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== i) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(findDuplicate([1, 1, 23, 45, 6, 7, 8, 9, 9]))