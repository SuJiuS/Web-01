let mysql = require('mysql')
let result = {}

let conn = mysql.createConnection({
    host: '47.92.50.43',
    user: 'root',
    password: 'shendu2017',
    database: 'msf',
    port: '6001'
})



result.getUserList = function (callback) {
    conn.query('SELECT * FROM USER_BASE', null, function (err, result, fields) {
        if (err) console.log("数据库错误：" + err)
        callback(result)
    })
}


result.getUserListByName = function (name, callback) {

    name = "%" + name + "%"

    conn.query('SELECT * FROM USER_BASE where nickname like ?', name,
    
    
    function (err, result, fields) {
        if (err) console.log("数据库错误：" + err)
        callback(result)
    })
}



module.exports = result
