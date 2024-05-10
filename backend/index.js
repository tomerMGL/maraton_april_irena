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

  let fileName = req.files.file.name;
  let currentTime = new Date().getTime();
  let filePath = `${__dirname}/uploaded_img/${currentTime}_${fileName}`
  let color = req.body.color;

  req.files.file.mv(filePath, async (err) => {
    if (err) {
      console.log(err);
    } else {

      await send_to_api(filePath, currentTime +'_'+ fileName.split('.')[0], color);
      res.send(currentTime +'_'+fileName);
    }
  });
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
