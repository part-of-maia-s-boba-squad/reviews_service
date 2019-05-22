const faker = require('faker');

var restaurants = [];

for (var j = 0; j < 10; j++) {
    restaurants.push({name: faker.company.companyName()})
};

var reviews = [];

for (var k = 0; k < 100; k++) {
    reviews.push({
        restaurant_id: Math.floor(Math.random() * (11 - 1)) + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),      
        location: faker.address.city(),
        total_reviews: Math.floor(Math.random() * (21 - 1)) + 1,
        overall: Math.floor(Math.random() * (6 - 1)) + 1,
        food: Math.floor(Math.random() * (6 - 1)) + 1,
        service: Math.floor(Math.random() * (6 - 1)) + 1,
        ambience: Math.floor(Math.random() * (6 - 1)) + 1,
        value: Math.floor(Math.random() * (6 - 1)) + 1,
        text: faker.lorem.paragraph(),
        created_at: faker.date.past()
    })
};

console.log('reviews', reviews)

module.exports = {

    restaurants,
    reviews
}

