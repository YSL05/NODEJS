
// 1、导入fs模块
const fs = require('fs')
const path = require('path')

// 2、读取文件
fs.readFile(path.join(__dirname, '../','./file/3.txt'), 'utf-8', function (err, data) {
    if (err) {
        console.log('读取失败' + err.message)
    }
    console.log('读取成功！' + data)

    // 3、处理数据
    const arrOld = data.split(' ')
    const arrNew = []
    arrOld.forEach(element => {
        arrNew.push(element.replace('=', ': '))
    });

    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    // 4、写入数据
    fs.writeFile(path.join(__dirname, '../','./file/整理完毕成绩.txt'),newStr, function (err) {
        if (err) {
            console.log('写入成绩失败' + err.message)
        }
    })
})
