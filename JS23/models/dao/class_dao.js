let conn = require('../../helper/base_dao')

let result = {}

result.list = function (callback) {
    conn.query('SELECT * FROM CLASSES', null, function (err, result, fields) {
        if (err)
            console.log("数据库错误" + err.message);
        else callback(result);
    })
}

module.exports = result