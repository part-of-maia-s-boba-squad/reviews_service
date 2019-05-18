
const mysql = require('mysql');
const config = require('./db_config.js');

const connection = mysql.createConnection(config);

connection.connect();

const getAllReviews  = (id, callback) => {
  
  connection.query(`SELECT * FROM reviews WHERE restaurant_id=${id}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      // console.log('data from DB', data)
      callback(null,data)
    }
  })
};


module.exports = {
  getAllReviews
}