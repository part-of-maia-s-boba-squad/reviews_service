const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

const noiseLevelArr = ["Quiet", "Moderate", "Loud"];

const restaurantDataGen = () => {
    writer.pipe(fs.createWriteStream('restaurants_data.csv'));
    let newCount;
    for (let i = 1; i <= 10000000; i++) {
        let percentageCount = Math.ceil((i/10000000) * 100);
        let num = Math.random();
        writer.write({
            restaurantId : i,
            restaurantName : num < 0.5 ? 
                num < 0.25 ? 
                    `${faker.commerce.productAdjective()} ${faker.name.lastName()}`
                    : 
                    `${faker.commerce.productAdjective()} ${faker.address.county()}`
                :
                num > 0.75 ?
                    `${faker.address.city()}` 
                    :
                    `${faker.name.lastName()}`
        });
        if (percentageCount % 1 === 0 && newCount !== percentageCount) {
            console.log(`Restaurants: ${percentageCount}% Complete`);
            newCount = Math.ceil(percentageCount);
        }
    }
    writer.end();
    console.log("10M Restaurants Generated");
};

restaurantDataGen();