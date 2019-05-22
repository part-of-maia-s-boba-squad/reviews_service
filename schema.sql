DROP DATABASE IF EXISTS ratings;
CREATE DATABASE ratings;
USE ratings;


/*Define table for restaurants*/
CREATE TABLE restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255)
   
);

/*Define table for users*/
CREATE TABLE users ( 
    id INT AUTO_INCREMENT PRIMARY KEY, /*UNIQUE will stop unwanted(repeated) values*/
    username VARCHAR (255) NOT NULL, 
    location VARCHAR (255) NOT NULL,
    total_reviews INT
   
);


/*Define table for reviews*/
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    restaurant_id INT,
    overall INT,
    food INT,
    service INT,
    ambience INT,
    value INT,
    text TEXT,
    created_at TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
)

/*run mysql -u root -p < schema.sql */






