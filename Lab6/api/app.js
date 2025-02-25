const express = require('express');
const cors = require('cors');
const ImageKit = require("imagekit");
const fs = require('fs');
const { apiLog } = require('./logger.js');

require('dotenv').config();
const privateKey = process.env.PRIVATE_KEY;
const app = express();

app.use(express.json());
app.use(cors());
app.use(apiLog);

app.get('/auth', (req, res) => {
  const imagekit = new ImageKit({
      publicKey : "public_qS3/wS9xNZ4MGS8k5jB/UdWLFiw=",
      privateKey : "your_private_api_key",
      urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
  });


  const authenticationParameters = imagekit.getAuthenticationParameters();

  res.json(authenticationParameters);

})


app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
});
