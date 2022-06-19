const TIME = require('./dataformat')

const dt = new Date()

console.log(dt)

const newT = TIME.dataFormat(dt)

console.log(newT)


const moment = require('moment')

const dt1 = moment().format('YYYY-MM-DD HH:mm:ss')

console.log(dt1)