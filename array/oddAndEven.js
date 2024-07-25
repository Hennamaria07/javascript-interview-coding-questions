((arr) => {
    const odd = [];
    const even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    console.log("odd ",odd);
    console.log("even ",even);
})([1, 2, 3, 4, 5, 6, 7, 7, 8]);