let mysql = require('mysql')

var conn = mysql.createConnection({
    host: '47.92.50.43',
    user: 'root',
    password: 'shendu2017',
    database: 'simba',
    port: '6001'
})

let result = {}

result.list = function (callback) {
    conn.query('SELECT * FROM CLASSES', null, function (err, result, fields) {
        if (err)
            console.log("数据库错误" + err.message);
        else callback(result);
    })
}

module.exports = result