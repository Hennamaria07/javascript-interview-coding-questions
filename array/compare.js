const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
console.log(arr1 === arr2);
// arrays and objects, variables hold a reference to the data, not the data itself. When you assign or compare reference types, you are dealing with references (memory addresses), not the actual data. Even though arr1 and arr2 contain the same elements, they are different objects in memory. So, the === operator returns false because it compares references, not the contents.

((arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        console.log('not same')
    } else {
        for (let i = 0 ; i < arr1.length ; i++) {
            if(arr1[i] !== arr2[i]) console.log('not same') ;
        }
        
        console.log('same')
    }
})(arr1, arr2)