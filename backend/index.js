const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const send_to_api = require("./send_to_api");

const app = express();
const port = 5000;

app.use(cors());
app.use(fileUpload());


app.use('/uploaded_img',express.static('uploaded_img'))
app.use('/removed_bg_img',express.static('removed_bg_img'))

//app.use(express.static('removed_bg_img'))
//app.use(express.static(__dirname + '/removed_bg_img'));


app.post("/upload_file", (req, res) => {
  console.log(req.files);
  let fileName = req.files.file.name;
  let filePath = `${__dirname}/uploaded_img/${fileName}`

  req.files.file.mv(filePath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("uploaded");
      send_to_api(filePath, fileName.split('.')[0]);
        console.log(fileName.split('.')[0]);
      res.send(`${fileName}`);
    }
  });
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
