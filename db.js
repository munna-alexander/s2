const mysql = require('mysql');

var config =
{
    host: 'dtsmartaccess-sqlserver.database.windows.net',
    user: 'sqladmin@dtsmartaccess-sqlserver.database.windows.net',
    password: '3p@hPWSGxStXvn4R!',
    database: 'DTSmartAccess-DB',
    port:1433,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            readData();
        }
    });

function readData(){
    conn.query('SELECT * FROM accounts', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
    conn.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
    });
};