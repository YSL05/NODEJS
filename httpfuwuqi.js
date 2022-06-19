'use strict'

// 1、引入http模块
const http = require('http')

// 2、http.createServer创建服务器实例
const server = http.createServer()

// 3、为服务器绑定request事件，监听客户端的请求
server.on('request', function (req, res) {
    // req 请求对象 包含与客户端有关的数据和属性：url地址 method 请求类型
    // res 响应对象 包含与服务器有关的数据和属性：
    const url = req.url
    let content = '<h1>404 Not fount</h1>'
    console.log('Someone visit our web server')
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    // const str = 'Your request url is ' + req.url + ' and request method is ' + req.method;
    // const str = '你请求的URL地址为' + req.url + ' 并且请求方式为' + req.method;
    // console.log(str)
    // console.log('Your request url is ${req.url}, and request method is ${url.method}')
    // 调用res.end()方法，向客户端响应一些内容
    // 解决res返回中文乱码问题
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(content)
})

// 4、启动服务器
server.listen(80,function () {
    console.log('server running at http://127.0.0.1:80')
})