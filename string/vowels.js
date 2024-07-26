((str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let letter of str.toLowerCase()) {
        if(vowels.includes(letter)) count++
    }
    console.log('count ', count)
})('hello my name is portgas d ace')