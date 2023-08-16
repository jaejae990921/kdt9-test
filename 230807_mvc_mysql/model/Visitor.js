const mysql = require('mysql');

// mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'simson',
    password: 'simson',
    database: 'kdt9'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('mysql connected');
});

// 방명록 전체 보이기
exports.getVisitors = (callback) => {
    const query = 'SELECT * FROM visitor';
    conn.query(query, (err, rows) => {
        console.log(rows);
        callback(rows);
    })
};

// 방명록 하나 조회
exports.getVisitor = (id, callback) => {
    const query = `SELECT * FROM visitor WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        callback(rows);
    });
}

// 방명록 하나 생성
exports.postVisitor = (data, callback) => {
    const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`;
    conn.query(query, (err, rows) => {
        console.log('rows : ', rows);
        callback(rows);
    });
}

// 방명록 하나 수정
exports.patchVisitor = (data, callback) => {
    const query = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log('rows : ', rows);
        if (err) {
            console.log(err)
            return;
        }
        callback();
    });
}

// 방명록 하나 삭제
exports.deleteVisitor = (data, callback) => {
    const query = `DELETE FROM visitor WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        console.log('rows : ', rows);
        if (err) {
            console.log(err)
            return;
        }
        callback();
    });
}