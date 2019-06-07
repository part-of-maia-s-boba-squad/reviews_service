const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
var counter = 0;

const arrOfLastDined60days = (()=>{
    let arr = [];
    for (let i = 0; i < 60; i++) {
        arr.push(faker.date.recent(60).toString().slice(4,15));
    }
    return arr;
})();

const userDataGen = () => {
    writer.pipe(fs.createWriteStream('users_data.csv'));
    let newCount;
    for (let i = 1; i <= 3333333; i++) {
        let percentageCount = Math.ceil((i/3333333) * 100);
        writer.write({
            userId : i,
            vip : Math.random() < 0.2 ? true : false,
            lastDined : arrOfLastDined60days[Math.floor(Math.random() * (59))],
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),   
            location : faker.address.city(),
            password : Math.random() < 0.5 ? 'abc' : '123',
            email : faker.internet.email(),
            username : faker.internet.userName()
        });
        if (percentageCount % 1 === 0 && newCount !== percentageCount) {
            console.log(`Users: ${percentageCount}% Complete`);
            newCount = Math.ceil(percentageCount);
        }
    }
    writer.end();
    console.log("3.33M Users Generated");
};

userDataGen();