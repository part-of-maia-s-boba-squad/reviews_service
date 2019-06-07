const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const review = fs.createWriteStream('reviews_data.csv');

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

const arrOfDescription = (() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(faker.lorem.paragraph());
    }
    return arr;
})();

const reviewsDataGen = () => {
    writer.pipe(fs.createWriteStream('reviews_data.csv'));
    for (let i = 0; i < 50; i++) {
        writer.write({
            reviewsId : i,
            userId : Math.floor(Math.random() * 3333333) + 1,
            restaurantID : Math.floor(Math.random() * 10e6) + 1,
            reportCount : Math.floor(Math.random() * 3) +1,
            helpfulCount : Math.floor(Math.random() * 20) +1,
            overallRating : Math.floor(Math.random() * 5) +1,
            foodRating : Math.floor(Math.random() * 5) +1,
            serviceRating : Math.floor(Math.random() * 5) +1,
            ambienceRating : Math.floor(Math.random() * 5) +1,
            text : arrOfDescription[Math.floor(Math.random() * 100)]
        });
    }
    writer.end();
    console.log("50M Reviews Generated");
};

reviewsDataGen();