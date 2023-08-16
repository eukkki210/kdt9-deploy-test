const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'eukkki',
    password: 'Inter!0719',
    database: 'kdt9',
    port: 3306,
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

exports.createUser = (data, cb) => {
    const query = `INSERT INTO user (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.pw}')`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.getUser = (data, cb) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;

    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }

        // console.log('rows: ', rows);
        cb(rows);
    });
};

exports.editProfile = (data, cb) => {
    const query = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' where id=${data.id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};

exports.deleteProfile = (id, cb) => {
    const query = `DELETE FROM user WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('rows: ', rows);
        cb(rows);
    });
};