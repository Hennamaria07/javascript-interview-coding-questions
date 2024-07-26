((str) => {
    const arr = str.split('');
    arr.reverse();
    let joinArr = arr.join('')
    console.log(joinArr)
})('hello this is');