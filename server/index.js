const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

app.use(express.static(__dirname + '/public'));

app.get(/.*/, (req, res) => res.sendfile(__dirname + '/public/index.html'));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));