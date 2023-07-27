const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({extended:true}) );

const albums = [
    {id: 1, albumName: 'Iowa', artist: 'SlipKnot'},
    {id: 2, albumName: 'The Infamous', artist: 'Mobb Deep'},
    {id: 3, albumName: 'Homework', artist: 'Daft Punk'},
    {id: 4, albumName: 'The Best of Sade', artist: 'Sade'},
    {id: 5, albumName: 'Carter 2', artist: 'Lil Wayne'}
]

app.get('/api', (request, response) => {
    response.json({albums})
})

app.get('/api/:id', (request, response) => {
    console.log(request.params);
    response.json({message: 'You did it'})
})

app.post('/api/newAlbum', (request, response) => {
    console.log(request.body);
    albums.push(request.body);
    response.json({message: "You added a new album"})
})

console.log("Hello World");
app.listen( port, () => console.log(`Listening on port: ${port}`) );