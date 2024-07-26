// right triangle pattern
((level) => {
    for(let i = 1; i <= level; i++) {
        let row = ''
        for(let j = 1; j <= i; j++) {
            row += '*'
        }
        console.log(row)
    }
})(6);

// pyramid
((lvl) => {
    for(let i = 1; i <= lvl; i++) {
        let row = ''
        for(let j = 1; j <= lvl - i; j++) {
            row += ' '
        }
        for(let k = 1; k <= i; k++) {
            row += ' * '
        }
        console.log(row)
    }
})(6);
