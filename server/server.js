
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const db = require ('../db/db.js');
const path = require('path');
const PORT = 3007;
const app = express();

//localhost:3007/restaurant/8/ -> render template module + data
app.use('/restaurant/:id', express.static(__dirname + './../client/dist/'));

//localhost:3007/ -> render template module without any data
// app.use('/', express.static(__dirname + './../client/dist/'));
// app.use(express.static(path.join(__dirname, './../client/dist/'))); 
app.use(bodyParser.json());
app.use(cors());

//original get req from FEC
app.get('/:id', (req, res) => {
    console.log('data', req.params.id);
    db.getAllReviews(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send();
        } else {
<<<<<<< HEAD
            console.log(data);
=======
>>>>>>> 4d5975b100ed21b5eb0623259c11e26f6177b1ce
            res.status(200).send(data);
        }
    });
});


// // DB1: Postgres ------------------------------------------

// //GET req 
// app.get('/:id', (req, res) => {

// });

// //POST req
// app.post('', (req, res) => {
    
// });

// //PUT req
// app.put();

// //DELETE req
// app.delete();



// // DB2: Cassandra ------------------------------------------

// //GET req
// app.get('/:id', (req, res) => {

// });

// //POST req
// app.post('', (req, res) => {
    
// });

// //PUT req
// app.put();

// //DELETE req
// app.delete();




//PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

