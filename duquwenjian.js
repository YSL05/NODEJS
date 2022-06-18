'use strict'

// 1、引入fs模块，操作文件
const fs = require('fs')

// 2、调用fs.readFile() 方法读取文件
//    参数1：读取文件的路径
//    参数2：读取文件的编码格式
//    参数3：回调函数，读取成功和失败的结果
fs.readFile('.././file/1.txt','utf-8',function (err,dataStr) {
    // 打印读取失败的结果
    // 读取成功err为null
    // 读取失败，err为错误对象，dataStr为undefined
    console.log(err)
    console.log('-------')
    // 打印读取成功的结果
    // dataStr为文件中内容
    console.log(dataStr)
    if (err) {
        console.log('读取失败！' + err.message)
    } else {
        console.log('读取成功！' + dataStr)
    }
})
// 3、调用fs.writeFile方法写入文件内容
//    参数1 写入文件路径
//    参数2、写入内容
//    参数3、回调函数
fs.writeFile('.././file/2.txt', '北京理工大学', function (err) {
    console.log('---------------------------------------------------------------------')
    console.log('写入文件')
    if (err) {
        console.log('文件写入失败' + err.message)
    } else {
        console.log('文件写入成功！')
    }
})