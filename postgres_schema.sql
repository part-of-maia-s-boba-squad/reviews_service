CREATE TABLE opentable.reviews (
    reviewId SERIAL PRIMARY KEY,
    restaurantId INT,
    overallRating INT,
    foodRating INT, 
    serviceRating INT, 
    ambienceRating INT,
    text TEXT, 
    approve BOOLEAN, 
    noiseLevel INT, 
    vip BOOLEAN, 
    lastDined TEXT, 
    firstName TEXT, 
    lastName TEXT, 
    location TEXT
);


/*run mysql -u root -p < schema.sql */
CREATE TABLE opentable.restaurants
(
    restaurantId SERIAL PRIMARY KEY,
    restaurantName TEXT
);






-- -- FOR COPYING CSV TO DB

-- -- FOR USERS
-- COPY opentable.users(userId,vip,lastDined,firstName,lastName,location,password,email,username) 
-- FROM '/Users/albungay/Documents/HackReactorSF/system_design_capstone/reviews_service/db/users_data.csv' DELIMITER ',' CSV HEADER;

-- -- FOR RESTAURANT
-- COPY opentable.restaurants(restaurantId,restaurantName) 
-- FROM '/Users/albungay/Documents/HackReactorSF/system_design_capstone/reviews_service/db/restaurants_data.csv' DELIMITER ',' CSV HEADER;

-- -- FOR REVIEWS
COPY opentable.reviews(reviewId,userId,restaurantId,reportCount,helpfulCount,overallRating,foodRating,serviceRating,ambienceRating,text,approve,noiseLevel,vip,lastDined,firstName,lastName,location) FROM '/Users/albungay/Documents/HackReactorSF/system_design_capstone/reviews_service/db/reviews_data.csv' DELIMITER ',' CSV HEADER;

--inserting 

-- end of db pool
INSERT INTO opentable.reviews
VALUES
    (49999999,
        3232323,
        'Al',
        'Beedointhis',
        true,
        'May 20 2019',
        'San Francisco',
        9999998,
        1,
        11,
        5,
        4,
        3,
        4,
        'Omnis corrupti molestiae et tenetur fugit nobis consectetur libero quasi. Suscipit eaque incidunt aut et dolor. Nemo aut aut id ipsam. Quisquam consequatur eum dolore minima delectus pariatur quia provident dolorum. Ipsum dolores aliquam dignissimos sapiente molestiae veritatis aliquid explicabo inventore.',
        true,
        'Loud'
    );

--start of db pool
INSERT INTO opentable.reviews
VALUES
    (1,
        12,
        'Dillon',
        'Hardeebee',
        false,
        'May 15 2019',
        'San Leandro',
        1,
        3,
        16,
        1,
        2,
        4,
        5,
        'Omnis corrupti molestiae et tenetur fugit nobis consectetur libero quasi. Suscipit eaque incidunt aut et dolor. Nemo aut aut id ipsam. Quisquam consequatur eum dolore minima delectus pariatur quia provident dolorum. Ipsum dolores aliquam dignissimos sapiente molestiae veritatis aliquid explicabo inventore.',
        true,
        'Loud'
    );