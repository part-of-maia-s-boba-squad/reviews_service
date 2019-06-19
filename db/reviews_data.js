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
        arr.push(faker.lorem.paragraph().slice(0, 100) + ".");
    }
    return arr;
})();

const arrOfLastDined60days = (() => {
    let arr = [];
    for (let i = 0; i < 60; i++) {
        arr.push(faker.date.recent(60).toString().slice(4, 15));
    }
    return arr;
})();

const arrOfFirstNames = (() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(faker.name.firstName());
    }
    return arr;
})();

const arrOfLastNames = (() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(faker.name.lastName());
    }
    return arr;
})();

const arrOfCities = (() => {
    let arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push(faker.address.city());
    }
    return arr;
})();


const noiseLevelArr = ["Quiet", "Moderate", "Loud"];

const reviewsDataGen = async () => {
    const writer = fs.createWriteStream('reviews_data.csv', { flag: 'a' });
    writer.write('restaurantId,overallRating,foodRating,serviceRating,ambienceRating,text,approve,noiseLevel,vip,lastDined,firstName,lastName,location\n');
    for (let i = 0; i < 50e6; i++) {
        const ableToWrite = writer.write(`${Math.floor(Math.random() * 10e6) + 1},${Math.floor(Math.random() * 5) + 1},${Math.floor(Math.random() * 5) + 1},${Math.floor(Math.random() * 5) + 1},${Math.floor(Math.random() * 5) + 1},${arrOfDescription[Math.floor(Math.random() * 100)]},${Math.random() < 0.85 ? true : false},${Math.ceil(Math.random() * 3) - 1},${Math.random() < 0.2 ? true : false},${arrOfLastDined60days[Math.floor(Math.random() * (59))]},${arrOfFirstNames[Math.ceil(Math.random() * 100)]},${arrOfLastNames[Math.ceil(Math.random() * 100)]},${arrOfCities[Math.ceil(Math.random() * 50)]}\n`);

        if (!ableToWrite) {
            await new Promise(resolve => {
                writer.once('drain', resolve);
            });
        }
        if (i % 500000 === 0) {
            console.log(`${Math.floor(i / 50e6 * 100)}% of reviews were generated.`);
        }
    }
    writer.end();
    console.log("50M Reviews Generated");
};

reviewsDataGen();

copy (select opentable.reviews