
-- FOR CASSANDRA SCHEMA --------------------------------------------------------

CREATE KEYSPACE opentable
WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

CREATE TABLE reviews
(
    reviewId int PRIMARY KEY,
    userId int,
    userFirstName text,
    userLastName text,
    userVIP boolean,
    userLastDined text,
    userLocation text,
    restaurantId int,
    reportCount int,
    helpfulCount int,
    overallRating int,
    foodRating int,
    serviceRating int,
    ambienceRating int,
    text text,
    approve boolean,
    noiseLevel text
);

--end of db
INSERT INTO opentable.reviews
    (reviewId,userId,userFirstName,userLastName,userVIP,userLastDined,userLocation,restaurantId,reportCount,helpfulCount,overallRating,foodRating,serviceRating,ambienceRating,text,approve,noiseLevel)
VALUES(
        49999999,
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
--start of db
INSERT INTO opentable.reviews
    (reviewId,userId,userFirstName,userLastName,userVIP,userLastDined,userLocation,restaurantId,reportCount,helpfulCount,overallRating,foodRating,serviceRating,ambienceRating,text,approve,noiseLevel)
VALUES(
        1,
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
        'Et autem perferendis omnis. Officia autem pariatur velit reiciendis est eum eum. Fugiat deserunt sapiente qui quaerat mollitia. Laudantium quis voluptatem ullam consectetur. Iure voluptatem laudantium quam praesentium ut culpa.',
        true,
        'Loud'
    );