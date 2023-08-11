const TvShow = require('../models/show.model')


module.exports = {
    
    index: (request, response) => {  //We are exporting a key:val pair of index : function
        response.json({     // This is where we're setting the API's response to the requesting client
           message: "Hello World"
        });
    },

    findAllShows: (req, res) => {
        TvShow.find({})
            .then((shows) => {
                res.json(shows)
            })
            .catch((err) => {
                res.json({message: 'Something went wrong', error:err})
            })
    },

    createShow: (req, res) => {
        TvShow.create(req.body)
        .then(show => res.json(show))
        .catch(err => res.json(err));
    },

    findOneShow: (req, res) => {
        const id = req.params.id
        TvShow.findById(id)
        .then(show => res.json(show))
        .catch(err => res.json(err));
    },

    deleteShow: (req, res) => {
        const id = req.params.id
        TvShow.deleteOne({_id: id})
        .then(show => res.json(show))
        .catch(err => res.json(err))
    },

    updateShow: (req, res) => {
        const id = req.params.id
        TvShow.findOneAndUpdate({_id: id}, req.body, {new:true})
        .then(updatedShow => res.json(updatedShow))
        .catch(err => res.json(err))

    }
}

