// To run node:
// node app.js

// To run nodemon:
// nodemon app.js

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')



yargs.command({
    command: 'post',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'remove a note',
    handler: function () {
        console.log('removing a note!')
    }
})

yargs.command({
    command: 'get',
    describe: 'lists note',
    handler: function () {
        console.log('lists the note')
    }
})

yargs.command({
    command: 'put',
    describe: 'updates a note',
    handler: function () {
        console.log('updates the note')
    }
})

yargs.parse()
//console.log(yargs.argv)