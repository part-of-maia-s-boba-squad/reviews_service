const relic = require('newrelic');
//GET req to db for all reviews -- original db: mySQL
const mysql = require('mysql');
const config = require('./db_config.js');
const connection = mysql.createConnection(config);
const { pool } = require('./postgres_queries.js');

// DB1: Postgres -----------------------------------------------------

//GET req 
const getAllReviews_Postgres = (id, callback) => {
  let text = `select * from opentable.reviews where restaurantid = ${id};`;
  pool.query(text, (error, results) => {
    if (error) {
      console.log("DB | STATUS: PostGres DB: after query: ", error);
    }
    console.log("DB | STATUS: Query Successful. DATA: PostGres DB TYPE:", typeof results, "| Raw Data: ", results);
    callback(null, results);
  });
};

//POST req
const postNewReview_Postgres = (reviewObj, cb) => {
  const textToUse = `INSERT INTO opentable.reviews(restaurantid,overallrating,foodrating,servicerating,ambiencerating,text,approve,noiselevel,vip,lastdined,firstname,lastname,location) VALUES (${reviewObj.restaurantid},${reviewObj.overallrating},${reviewObj.foodrating},${reviewObj.servicerating},${reviewObj.ambiencerating},\'${reviewObj.text}\',${reviewObj.approve},${reviewObj.noiselevel},${reviewObj.vip},\'${reviewObj.lastdined}\',\'${reviewObj.firstname.includes('\'') ? "Bob" : reviewObj.firstname}\',\'${reviewObj.lastname.includes('\'') ? "Bobson" : reviewObj.lastname}\',\'${reviewObj.location}\')`;
  // console.log(textToUse);
  // callback
  pool.query(textToUse, (err) => {
    if (err) {
      console.log("DB | Error in inserting.", textToUse, err.stack);
      cb(err);
    } else {
      cb(null);
    }
  });
};

//PUT req
const updateReview_Postgres = () => { };

//DELETE req
const deleteReview_Postgres = () => { };






// DB2: Cassandra ---------------------------------------------------

//GET req
const getAllReviews_Cassandra = () => { };

//POST req
const postNewReview_Cassandra = () => { };

//PUT req
const updateReview_Cassandra = () => { };

//DELETE req
const deleteReview_Cassandra = () => { };

// // old module export for FEC
// module.exports = {
//   getAllReviews
// };


module.exports = {
  getAllReviews_Postgres, postNewReview_Postgres
};




//FEC get Req 
// connection.connect();
// const getAllReviews  = (id, callback) => {
//   connection.query(`SELECT * FROM reviews WHERE restaurant_id=${id}`, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null,data);
//     }
//   });
// };