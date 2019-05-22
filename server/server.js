const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const db = require ('../db/db.js');
const path = require('path');
const PORT = 3007;
const app = express();

app.use('/restaurant/:id', express.static(__dirname + './../client/dist/'));
app.use('/', express.static(__dirname + './../client/dist/'));
app.use(bodyParser.json());
app.use(cors());


app.get('/:id', (req, res) => {
    
    db.getAllReviews(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(data)
        }
    })
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));






