const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(
  "mongodb+srv://numjadeja_db_user_:Farhan9876@e-fashion.8hcfysf.mongodb.net/e-fashion"
);

app.get("/", (req, res) => {
  res.send("Express App is running");
});

// Image

const storage = multer.diskStorage({
  destination: "./uplaod/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uplaod = multer({ storage: storage });

// creating Upload
app.use("/images", express.static("upload4r/images"));
app.post("/upload", uplaod.single("image"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Producr = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["clothing", "electronics", "accessories"],
  },

  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  available: {
    type: Boolean,
    required: true,
  },
});

app.post("/addproducts", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port " + port);
  } else {
    console.log("Error occurred: " + error);
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port " + port);
  } else {
    console.log("Error occurred: " + error);
  }
});
