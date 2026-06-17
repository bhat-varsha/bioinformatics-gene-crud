const express = require('express');
const bodyParser = require('body-parser');
//body-parser is middleware in Node.js/Express used to read incoming request data 
//Whenever data comes from the frontend, convert the JSON into javascript before reaching my routes.
const db = require('./database'); //connecting to the database, which we created in database.js

const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); //serving static files from the 'public' directory

app.post('/genes', (req, res) => {
    // activating req and res,means starting loop
    const gene_name = req.body.gene_name;
    const sequence = req.body.sequence; 
    db.run(
        `INSERT INTO genes (gene_name, sequence) VALUES (?, ?)`,// ?=placeholder
        // to prevent SQL injection attacks, by treating user input as data rather than executable code.
        [gene_name, sequence],//helpt to filetr out any harmful input, 
        function (err) { //error handling block
            if (err) {
                console.log(err);
                return res.send("Error");
            }
            res.send("Gene added successfully");
        }
    );
});

//fetch data
app.get('/genes', (req, res) => {
    db.all(`SELECT * FROM genes`,[], (err, rows) => {
        if (err) {
            console.log(err);
            return res.send("Error");
        }
        res.json(rows);
    });
});

//PUT update data
app.put('/genes/:id', (req, res) => {//dynamic rerouting, to access specific gene by id
    const id = req.params.id;
    const gene_name = req.body.gene_name;
    const sequence = req.body.sequence;

    db.run(
        `UPDATE genes
         SET gene_name = ?,
         sequence = ? 
         WHERE id = ?`,

        [gene_name, sequence, id],
        function (err) {
            if (err) {
                console.log(err);
                return res.send("Error");
            }
            res.send("Gene updated successfully");
        }
    );
});

//DELETE data
app.delete('/genes/:id', (req, res) => {
    const id = req.params.id;

    db.run(
        `DELETE FROM genes WHERE id = ?`,
        [id],
        function (err) {
            if (err) {
                console.log(err);
                return res.send("Error");
            }   

            res.send("Gene deleted successfully");
        }
    );
});


app.listen(3000, () => {
    console.log("Server started")
    });

//___________________________________________________________________________________________________

// first we have strandaize the name of endpoints,like wll change add gene , gene , delete gene 
//end points we are using , app.get , app.put, app.delete, and app.post to perform different operations on the server.
// we are using app.post to insert data into the database, and app.get to fetch data from the database.
// we are using parameterized queries to prevent SQL injection attacks, by treating user input as data rather than executable code.
//  app.put(/genes/:id) to update the data in the database, and app.delete(/genes/:id) to delete the data from the database.
// app.put(/genes:i) to access specific gene 

//url =source
//https =actions , methods

//API COMMUNICATE THROUGH JSON FOMRAT

//skeleoton script
//user input the data(strings)-- goes to server-express->database--sqlite3--store the data in the database--
// fetch the data from the database--send it back to the client in JSON format--client can use that data to display it on the frontend.


//endponit?name=BRCA1&sequence=ATCG

//query parameter , and routing parameter

//assets=themes or colors, tool we use especially for frontend development, to make the website look good and responsive
//dumping evrything in the public folder, so that it can be accessed by the client
//get , post ,put,delete are the HTTP methods used to perform different operations on the server.[object creATEOT]
//PUT=INSERT DATA
//POST SEND DATA
//GET=FETCH DATA ,RETRIVE
//insert data
// add-gene and gene is end pooints, which are used to perform specific operations on the server.
// url is resource , whihcb now we are using local host
//rest series of rule , which is set in palce for us to stnadradize the API design, to make it more consistent and easier to use.
//REST=represenational state transfer which is architectural style for designing networked applications, which relies on stateless communication and standard HTTP methods to perform operations on resources. 


