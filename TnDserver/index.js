const express = require('express');
const route = require('./routes/router.js')
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors(

));
app.use(express.json());

app.use('/', route)

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})