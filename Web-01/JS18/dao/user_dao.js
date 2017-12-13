let mysql = require('mysql')

let conn = mysql.createConnection({
    host: '47.92.50.43',
    user: 'root',
    password: 'shendu2017',
    port: '6001',
    database: 'msf'
})

function getUserList(callback) {
    conn.query("select * from user_base", function (err, result, fields) {
        if (err) console.log(err)
        callback(result)
    })
}

function getUserDetail(userid,callback) {
    conn.query("select * from user_base where id = ?", userid, function (err, result, fields) {
        if (err) console.log(err)
        callback(result)
    })
}

module.exports = {
    getUserList: getUserList,
    getUserDetail: getUserDetail
}



