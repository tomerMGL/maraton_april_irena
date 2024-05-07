
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());
app.use(fileUpload());

app.post('/upload_file', (req, res) => {
    console.log(req.body);
    res.send('Hello World');
})


app.listen(port, () => {
    console.log(`listen on port ${port}`);
})