
const mysql = require('mysql');
const config = require('./db_config.js');
const faker = require('faker');

const connection = mysql.createConnection(config);


//Insert data into restaurants DB
for (var j = 0; j < 20; j++) {
    connection.query(`INSERT INTO restaurants(name) VALUES ("${faker.company.companyName()}")`);
};
 
//Insert data into reviews DB
for (var k = 0; k < 100; k++) { 
    connection.query(`INSERT INTO reviews(restaurant_id, firstName, lastName, location, total_reviews,  overall, food, service, ambience, value, text, date) VALUES 
    (
    "${Math.floor(Math.random() * (21 - 1)) + 1 }",
    "${faker.name.firstName()}",
    "${faker.name.lastName()}",   
    "${faker.address.city()}",
    "${Math.floor(Math.random() * (21 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${faker.lorem.paragraph()}",
    "${Math.floor(Math.random() * (31 - 1)) + 1}")`)
};


module.exports = {
    connection
}





