//GET req to db for all reviews -- original db: mySQL
const mysql = require('mysql');
const config = require('./db_config.js');
const connection = mysql.createConnection(config);
connection.connect();
const getAllReviews  = (id, callback) => {
  connection.query(`SELECT * FROM reviews WHERE restaurant_id=${id}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null,data);
    }
  });
};

// DB1: Postgres -----------------------------------------------------

//GET req 
const getAllReviews_Postgres = () => {};

//POST req
const postNewReview_Postgres = () => {};

//PUT req
const updateReview_Postgres = () => {};

//DELETE req
const deleteReview_Postgres = () => {};


// DB2: Cassandra ---------------------------------------------------

//GET req
const getAllReviews_Cassandra = () => {};

//POST req
const postNewReview_Cassandra = () => {};

//PUT req
const updateReview_Cassandra = () => {};

//DELETE req
const deleteReview_Cassandra = () => {};



module.exports = {
  getAllReviews
};