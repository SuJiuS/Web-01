let conn = require('../../helper/base_dao')

let result = {}

//验证登录
result.login = function (args, callback) {

    conn
        .query('SELECT count(1) as result FROM USER_LOGIN WHERE USERNAME= ? AND PASSWORD =?', args, function (err, rrr, f) {
            if (err) 
                logger.log(err)
            else {
                callback(rrr)
            }
        })

}

result.list = function (callback) {
    conn
        .query('SELECT * FROM USER_LOGIN', null, function (err, result, fields) {
            if (err) 
                console.log("数据库错误" + err.message);
            else 
                callback(result);
            }
        )
}

result.getJudgeList = function (callback) {
    conn
        .query('SELECT content FROM judgement', null, function (err, result, fields) {
            if (err) 
                console.log("数据库错误" + err.message);
            else 
                callback(result);
            }
        )
}

result.add = function (args, callback) {
    conn
        .query('INSERT into user_login(username,password,nickname) values(?,?,?)', args, function (err, result, fields) {
            if (err) 
                console.log("数据库错误" + err.message);
            else 
                //返回受影响行数
                callback(result.affectedRows);
            }
        )
}

//删除
result.delete = function (args, callback) {
    conn
        .query('DELETE FROM USER_LOGIN WHERE ID=?', args, function (err, result, fields) {
            if (err) 
                console.log("数据库错误" + err.message);
            else 
                //返回受影响行数
                callback(result.affectedRows);
            }
        )
}



//新增留言
result.addJudge = function (content, callback) {

    let sql = 'INSERT INTO `judgement`(`content`) VALUES (?)'
    conn.query(sql, content, function (err, result, fields) {
        if (err) 
            logger.log("数据库错误", err.message);
        else 
            callback(result.affectedRows);
        }
    );

}

module.exports = result