const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const pool = require('./config/db-connection.js');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.use('/upload' ,express.static(path.join(__dirname, 'uploads')))

router.post("/upload/:id/image", upload.single("image"), (req, res) => {
const newPath = `http://localhost:3000/upload/${req.file.filename}`
  const file = req.file.path;
  if (!file) {
    res.status(400).json({
      status: "fail",
      message: "No File Selected",
    });
  } else {
    const {id} = req.params
    const updateImages = `UPDATE movies 
                          SET image_url = $2
                          WHERE id = $1`

    pool.query(updateImages, [id, newPath], (err, result) => {
        if (err) {
            throw err
        } else{
            res.status(201).json({
                status: 'success',
                message: 'insert',
                data: req.file.filename,
                image_url : newPath
            })
        }
    })
  }
});


module.exports = router;
