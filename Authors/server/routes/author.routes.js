const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.index);

    app.get('/api/author', AuthorController.findAllAuthors)
    app.get('/api/author/:id', AuthorController.findOneAuthor)
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.post('/api/author', AuthorController.createAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}

