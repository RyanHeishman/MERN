const Author = require('../models/author.model')


module.exports = {
    
    index: (request, response) => {
        response.json({
           message: "Hello World"
        });
    },

    findAllAuthors: (req, res) => {
        Author.find({})
            .then((authors) => {
                res.status(200).json(authors)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
        .then(author => res.status(201).json(author))
        .catch(err => res.status(500).json(err));
    },

    findOneAuthor: (req, res) => {
        const id = req.params.id
        Author.findById(id)
        .then(author => res.status(200).json(author))
        .catch(err => res.status(500).json(err));
    },

    deleteAuthor: (req, res) => {
        const id = req.params.id
        Author.deleteOne({_id: id})
        .then(author => res.status(204).json(author))
        .catch(err => res.status(500).json(err))
    },

    updateAuthor: (req, res) => {
        const id = req.params.id
        Author.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor => res.status(201).json(updatedAuthor))
        .catch(err => res.status(500).json(err))

    }
}