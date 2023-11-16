const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5662379',
    password: 'awxbpuNEUV',
    database: 'sql5662379'
    
});

connection.connect((err)=>{
    if(err){
        console.error('Error while connecting to mysql');
        return;
    }

    console.log('connected to mysql');
});

module.exports = connection;
