((str) => {
    const arr = str.split('');
    arr.reverse()
    const reverseString = arr.join('')
    if(reverseString === str) {
        console.log(`${str} is a palindrome`)
    } else {
        console.log(`${str} is not a palindrome`)
    }
})('racecar')