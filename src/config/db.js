const mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'web'
});

module.exports = {
    pool,
}

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'web'
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Error cornet:', err);
//         return;
//     }
//     console.log('Connected!');
// });