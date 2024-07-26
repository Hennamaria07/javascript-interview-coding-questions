((arr1, arr2) => {
    const merge = [...arr1, ...arr2]
    console.log([...new Set(merge)])
})([1,2,3,4,5], [4,5,6,7])