'use strict'

function dataFormat(dtStr) {
    
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = adZero(dt.getMonth() + 1)
    const d = adZero(dt.getDate())

    const hh = adZero(dt.getHours())
    const mm = adZero(dt.getMinutes())
    const ss = adZero(dt.getSeconds())

    // return '${y}-${m}-${d} ${hh}:${mm}:${ss}'
    return y + '-' + m + '-'+ d + ' ' + hh + ':'+ mm + ':'+ ss
}

function adZero(n) {
    return n > 9 ? n : '0' + n
}

module.exports = {
    dataFormat
}