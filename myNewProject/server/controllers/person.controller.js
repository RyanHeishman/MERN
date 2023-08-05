const Person = require('../models/person.model')

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}

module.exports.findAllPersons = (request, response) => {
    Person.find()
        .then((allPersons) => {
            response.json({persons: allPersons})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        })
}
module.exports.createPerson = (request, response) => {
    Person.create(request.body)
    .then(person => response.json(person))
    .catch(err => response.json(err));
}
