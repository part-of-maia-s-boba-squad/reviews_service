
// const mysql = require('mysql');
// const config = require('./db_config.js');
// const faker = require('faker');

// const connection = mysql.createConnection(config);


//Insert data into users DB
for(var i = 0; i < 20; i++) {
    connection.query(`INSERT INTO users(username, location, total_reviews) VALUES ("${faker.name.findName()}", "${faker.address.city()}", "${Math.floor(Math.random() * (21 - 1)) + 1 }")`)
};

//Insert data into restaurants DB
for (var j = 0; j < 10; j++) {
    connection.query(`INSERT INTO restaurants(name) VALUES ("${faker.company.companyName()}")`);
};
 
//Insert data into reviews DB
for (var k = 0; k < 50; k++) { 
    connection.query(`INSERT INTO reviews(user_id, restaurant_id, overall, food, service, ambience, value, text, created_at) VALUES 
    ("${Math.floor(Math.random() * (21 - 1)) + 1}",
    "${Math.floor(Math.random() * (11 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${Math.floor(Math.random() * (6 - 1)) + 1}",
    "${faker.lorem.paragraph()}",
    "${faker.date.past()}")`)
};


// module.exports = {
//     connection
// }





