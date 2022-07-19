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
// ws
        // const WEBSOCKET = require("./webSocket");
//db
const GridFile = require("./models/filesSchame");
const Users = require("./models/user")
////middleWare
const upload =  multer({ dest: path.join(__dirname, '.') })



const PORT = SECRET.PORT || "3033";
const app = express();
app.get("/",(r,e)=> console.log(46546))
app.use(cors());
app.use(express.json());
app.use("/auth", routerClient);
app.use("/admin", routerAdmin);
app.use("/chat", routerMessages);

app.post('/chatpx/filefromclient', upload.any(), async (req, res, nxt) => {
  try {
    // uploaded file are accessible as req.files
    if (req.files) {
      const promises = req.files.map(async (file) => {
        const fileStream = fs.createReadStream(file.path)

        // upload file to gridfs
        const gridFile = new GridFile({ filename: file.originalname })
        await gridFile.upload(fileStream)
  
        // delete the file from local folder
        fs.unlinkSync(file.path)
        const  data = await GridFile.find({gridFile})
        const info = data[data.length-1]
         console.log(SECRET.serverUrl + info._id +"/"+ info.filename);
        // update user img
        if (req.body.user_id) {
          const  data = await GridFile.find({gridFile})
          const info = data[data.length-1]
          const userUpdate = await Users.findOneAndUpdate({_id:req.body.user_id},{img:SECRET.serverUrl + info._id +"/"+ info.filename})
          userUpdate.save()
        }
      })

      await Promise.all(promises)
    }

    res.sendStatus(201)
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



async function startAPP() {
  try {
    // WEBSOCKET();
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
