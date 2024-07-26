((num) => {
    let a = 0;
    let b = 1;
    for(let i = 0; i <= num ; i++) {
        const temp = a + b;
        a = b;
        b = temp;
        console.log(temp)
    }
})(15)