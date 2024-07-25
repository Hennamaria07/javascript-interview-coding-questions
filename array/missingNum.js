// 1-->find min and max value
// 2--> loop with the condition

((array) => {
    const arr = array.sort((a, b) => a - b);
    // console.log(arr)
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const missingArr = []
    for (let i = min; i < max; i++) {
        if (!arr.includes(i)) missingArr.push(i);
    }
    console.log(missingArr)
})([1, 2, 4, 5, 10, 9, 6]);