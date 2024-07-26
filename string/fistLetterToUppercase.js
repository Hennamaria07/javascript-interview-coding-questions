((str) => {
    const strArr = str.split(' ');
    const newArr = strArr.map(ele => ele.charAt().toUpperCase() + ele.slice(1));
    console.log(newArr.join(' '))
})('hello my name')
 