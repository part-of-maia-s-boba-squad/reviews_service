const relic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const { getAllReviews_Postgres, postNewReview_Postgres } = require ('../db/db.js');
const path = require('path');
const PORT = 3007;
const app = express();

//localhost:3007/restaurant/8/ -> render template module + data
app.use('/restaurant', express.static(path.join(__dirname , './../client/dist/')));
app.use(bodyParser());
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

// // DB1: Postgres ------------------------------------------

// //GET req 
app.get('/review/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log('SERVER | STATUS: Req data about to query db. | Data:', id);
    getAllReviews_Postgres(id, (err, data) => {
        if (err) {
            res.status(500).send();
        } else {
            // cant send "parts" of the data
            // console.log("SERVER | STATUS: Got to Server. | Rows Data:", data.rows);
            res.status(200).send(data);
        }
    });
});

// //POST req
app.post('/addReview', (req, res) => {
    // console.log("POST: Req body is: ", req.body);
    postNewReview_Postgres(req.body, (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});



// //PUT req
// app.put();

// //DELETE req
// app.delete();

//original get req from FEC
// app.get('/:id', (req, res) => {
//     console.log('data', req.params.id);
//     db.getAllReviews(req.params.id, (err, data) => {
//         if (err) {
//             res.status(500).send();
//         } else {
//             res.status(200).send(data);
//         }
//     });
// });


//PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
