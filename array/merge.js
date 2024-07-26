((arr1, arr2) => {
    // concat
    const merge = arr1.concat(arr2).sort()
    console.log(merge)
    // spread operator
    const secondMerge = [...arr1, ...arr2].sort();
    console.log(secondMerge)
})([1, 2, 3], [4, 9, 6])