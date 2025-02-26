const express = require('express');
let data = require('./data/album-data.json');
let users = require('./data/user-data.json');
const cors = require('cors');
const {apiLog} = require('./logger');

app = express();
app.use(express.json());
app.use(apiLog)
app.use(cors());

app.get('/albums', (req, res) => {
  res.json(data);
});

app.get('/albums/:id', (req, res) => {
  const id = Number(req.params.id);
  res.status(200).json(data.find(album => album.id === id));
})

app.get('/albums/:id/photos', (req, res) => {
  const id = Number(req.params.id);
  const album = data.find(album => album.id === id);
  res.status(200).json(
  [
    {
      albumId: id,
      id: 1,
      title: album.title,
      url: 'https://ik.imagekit.io/nspectree/miku/illust_121999945_20240908_102951.jpg?updatedAt=1740508652895',
      thumbnailUrl: 'https://ik.imagekit.io/nspectree/miku/illust_121999945_20240908_102951.jpg?updatedAt=1740508652895'
    },

    {
      albumId: id,
      id: 2,
      title: album.title,
      url: 'https://ik.imagekit.io/nspectree/miku/116754237_p3_master1200.jpg?updatedAt=1740508651198',
      thumbnailUrl: 'https://ik.imagekit.io/nspectree/miku/116754237_p3_master1200.jpg?updatedAt=1740508651198'
    },
    
    {
      albumId: id,
      id: 3,
      title: album.title,
      url: 'https://ik.imagekit.io/nspectree/miku/119804911.png?updatedAt=1740508650128',
      thumbnailUrl: 'https://ik.imagekit.io/nspectree/miku/119804911.png?updatedAt=1740508650128'
    }
  ]
)})

app.patch('/albums/:id', (req, res) => {
  const body = req.body;
  const id = Number(req.params.id);
  data.at(data.findIndex(album => album.id === id)).title = body.title;
  res.status(200).json();
})

app.delete('/albums/:id', (req, res) => {
  const id = Number(req.params.id);
  data = data.filter(album => album.id !== id);
  res.json(`Deleted album with id ${id}`);
})

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  res.json(users.find(user => user.id === id));
})


app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})
