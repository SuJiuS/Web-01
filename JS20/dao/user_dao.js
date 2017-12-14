let mysql = require('mysql')



var conn = mysql.createConnection({
    host: '47.92.50.43',
    user: 'root',
    password: 'shendu2017',
    database: 'simba',
    port: '6001'
})

let result = {}

result.getUserByNameAndPwd = function (args, callback) {
    conn.query('SELECT count(1) as result FROM USER_LOGIN WHERE USERNAME= ? AND PASSWORD =?', args, function (err, rrr, f) {
        if (err) console.log(err)
        else {
            callback(rrr)
        }
    })

}

module.exports = result