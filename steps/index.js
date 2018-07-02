// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

steps = n => {
    // iterate through the rows of the steps
    for (let row = 0; row < n; row++) {
        //create an empty string to add to
        let stair = ''
        // iterate through the columns
        for (let column = 0; column < n; column++) {
            //if columns <= rows add a #
            if (column <= row) {
                stair += "#"
            } else {
                //add space instead
                stair += " "
            }
        }
        console.log(stair)
    }
}
steps(3)
steps(5)
steps(7)