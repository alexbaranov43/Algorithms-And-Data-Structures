// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

pyramid = n => {
    //find the center of the pyramid
    const midpoint = Math.floor((2 * n - 1) / 2);
    //iterate through the rows of the pyramid
    for (let row = 0; row < n; row++) {
        let level = ""
        for (let column = 0; column < 2 * n - 1; column++) {
            //if midpoint +/- row equal to column add a pound
            if (midpoint + row >= column && midpoint - row <= column) {
                level += "#"
            } else {
                level += " "
            }
        }
        console.log(level)
    }
}

pyramid(1)
pyramid(2)
pyramid(3)