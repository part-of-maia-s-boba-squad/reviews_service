const faker = require('faker');

var users = [];

for(var i = 0; i < 20; i++) {
    users.push({name: faker.name.findName(), location: faker.address.city(), reviews: Math.floor(Math.random() * (21 - 1)) + 1 });
    
};


var restaurants = [];

for (var j = 0; j < 10; j++) {
    restaurants.push({name: faker.company.companyName()})
};

var reviews = [];

for (var k = 0; k < 50; k++) {
    reviews.push({
        user_id:Math.floor(Math.random() * (21 - 1)) + 1,
        restaurant_id: Math.floor(Math.random() * (11 - 1)) + 1,
        overall: Math.floor(Math.random() * (6 - 1)) + 1,
        food: Math.floor(Math.random() * (6 - 1)) + 1,
        service: Math.floor(Math.random() * (6 - 1)) + 1,
        ambience: Math.floor(Math.random() * (6 - 1)) + 1,
        text: faker.lorem.paragraph(),
        created_at: faker.date.past()
    })
};

console.log(users);
console.log(reviews);
console.log(restaurants);

module.exports = {
    users,
    restaurants,
    reviews
}

