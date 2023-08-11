const TvShowController = require('../controllers/show.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', TvShowController.index);

    app.get('/api/show', TvShowController.findAllShows);
    app.get('/api/show/:id', TvShowController.findOneShow)
    app.put('/api/updateShow/:id', TvShowController.updateShow )
    app.post('/api/show', TvShowController.createShow);
    app.delete('/api/deleteShow/:id', TvShowController.deleteShow);
}

