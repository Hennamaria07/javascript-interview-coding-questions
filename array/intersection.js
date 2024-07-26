((arr1, arr2) => {
    // const intersection = arr1.filter(ele => arr2.includes(ele))
    const intersection = []
    for(let i = 0; i < arr1.length; i++) {
        arr2.includes(arr1[i]) ? intersection.push(arr1[i]) : ""
    }
    console.log([...new Set(intersection)])
})([1,2,3,4], [4,5,6,3])