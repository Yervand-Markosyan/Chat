//  lib
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer')
const path = require('path')
const fs = require("fs")
// routers
const routerClient = require("./routers/authRouter");
const routerAdmin = require("./routers/adminRouter");
const routerMessages = require("./routers/messengerRouter");
// secret
const SECRET = require("./secrets/config");
//db
const GridFile = require("./models/filesSchame");
const Users = require("./models/user")
const message = require("./models/MessageSchame");
const { send } = require("process");
////middleWare
const upload = multer({ dest: path.join(__dirname, '.') })

const PORT = SECRET.PORT || "3033";
const app = express();
app.use(cors({
  origin: ["http://localhost:3000","http://localhost:3001"],
  maxHttpBufferSize: 1e8
}));
app.use(express.json({limit: "30mb",extended:true}));
app.use("/auth", routerClient);
app.use("/admin", routerAdmin);
app.use("/chat", routerMessages);

app.post('/chatpx/filefromclient', upload.any(), async (req, res, nxt) => {
  try {
    console.log(req.files);
    let info;
    // uploaded file are accessible as req.files
    if (req.files) {
      // console.log(req)
      const promises = req.files.map(async (file) => {
        const fileStream = fs.createReadStream(file.path)
        // upload file to gridfs
        const gridFile = new GridFile({ filename: file.originalname })
        await gridFile.upload(fileStream)
        // delete the file from local folder
        fs.unlinkSync(file.path)
        const data = await GridFile.find({ gridFile })
         info = data[data.length - 1]
        console.log(SECRET.serverUrl + info._id + "/" + info.filename);

      })
      await Promise.all(promises)
      res.send(SECRET.serverUrl + info._id + "/" + info.filename)
    }
  } catch (err) {
    nxt(err)
  }
})

app.get('/chatpx/files/:id/:name', async (req, res, nxt) => {
  try {
    const { id, name } = req.params

    const gridFile = await GridFile.findById(id)

    if (gridFile) {
      res.attachment(name)
      gridFile.downloadStream(res)
    } else {
      // file not found
      res.status(404).json({ error: 'file not found' })
    }
  } catch (err) {
    nxt(err)
  }
})

// app.get('/delete',(req,res)=>{
//   message.find({}).then(data => {
//     data.forEach(item => {
//       message.deleteOne({_id:item._id}).then(data => console.log(data))
//     })
//   })
//   res.send("ok")
// })

async function startAPP() {
  try {
    mongoose
      .connect(SECRET.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log("DB is conected... "))
      .catch(() => console.log("DB is not conected see your Node"));

    app.listen(PORT, () => {
      console.log(`HttpServer is started... `);
    });
  } catch (e) {
    console.log(e);
  }
}

startAPP();
