let mysql = require('mysql')
let logger = require('../helper/log')


var conn = mysql.createConnection({
    host: '47.92.50.43',
    user: 'root',
    password: 'shendu2017',
    database: 'simba',
    port: '6001'
})

let result = {}

//验证登录
result.login = function (args, callback) {

console.log(args)

    conn.query('SELECT count(1) as result FROM USER_LOGIN WHERE USERNAME= ? AND PASSWORD =?', args, function (err, rrr, f) {
        if (err) logger.log(err)
        else {
            callback(rrr)
        }
    })

}

result.getJudgeList=function(callback){
    conn.query('SELECT content FROM judgement',null,function(err,result,fields){
        if(err)
            console.log("数据库错误"+err.message);
       else callback(result);
    })
}



//新增留言
result.addJudge = function (content, callback) {

    let sql = 'INSERT INTO `judgement`(`content`) VALUES (?)'
    conn.query(sql, content, function (err, result, fields) {
        if (err)
            logger.log("数据库错误", err.message);
        else
            callback(result.affectedRows);
    });

}

module.exports = result