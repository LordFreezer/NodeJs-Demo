/* Example 3) Exporting Functions
const add = require('./utils.js')
const sum = add(2, 5)
console.log(sum)
*/

/* Example 2) Exporting Values
// assign var to exported var
const name = require('./utils.js')
console.log(name)
*/

/* Example 1) Module require
// loads fileSystem module into script
const fs = require('fs')
// if not created, create new file and overrides it with string
fs.writeFileSync('notes.txt', 'Wow!')
// if not created, create new file and appends file with string
fs.appendFileSync('notes.txt', '\nWelcome aboard')
*/

// run with:
// node examples.js