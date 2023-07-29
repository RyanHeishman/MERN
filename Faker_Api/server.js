const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({extended:true}) );

console.log("Hello World");
app.listen( port, () => console.log(`Listening on port: ${port}`) );

// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');
const createUser = () => {
    const userFake = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        id: faker.number.int()
    };
    return userFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const companyFake = {
        name: faker.company.name(),
        streetAdress: faker.location.streetAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        state: faker.location.state(),
        country: faker.location.country(),
        id: faker.number.int()
    };
    return companyFake;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);

const user = [
    { firstName: 'Clarissa',
    lastName: 'Fisher-Tillman',
    email: 'Hazel_Zulauf13@hotmail.com',
    password: 'BpJg82G47E4U1H9',
    phoneNumber: '1-864-924-0417',
    id: 2724157068410880}
]

const company = [
    { name: 'Padberg - Trantow',
    streetAdress: '153 Minerva Spur',
    city: 'East Dorianport',
    zipCode: '00436-8932',
    state: 'Texas',
    country: 'Nigeria',
    id: 4511559659290624}
]

app.get('/api/users/new', (request, response) => {
    response.json({user})
})

app.get('/api/companies/new', (request, response) => {
    response.json({company})
})

app.get('/api/user/company', (request, response) => {
    response.json({company, user})
})