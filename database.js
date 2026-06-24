//skeleotn script to create a database and a table for storing gene information
const sqlite3=require('sqlite3').verbose(); //require sqlite:IMPORTING THE SQLITE3 MODULE
//calling a sqlite3 method to create a new database connection external service
//verbose() =Enables detailed error messages and debugging logs.

const db=new sqlite3.Database('./genes.db'); 
//creates a new database file named genes.db.
db.serialize(()=>{ //order of command execution
    db.run(`
    CREATE TABLE IF NOT EXISTS genes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        gene_name TEXT,
        sequence TEXT
    ) 
`); 
    console.log("database connected");
});
module.exports = db;
//Share the database connection with server.js
//db is a object we created earlier,which is connected to database called genes.db
//now using module.exports, we are making  db available to other files.

//` is used to create a multi-line string in JavaScript
// `=template literal, allows for multi-line strings and string interpolation