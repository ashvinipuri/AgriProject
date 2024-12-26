var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var multer = require("multer");
var path = require("path");
var fs = require("fs");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "farmerdetails",
});

var app = express();

// Enable CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/"); // save files to 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // add unique timestamp to filename
  },
});

const upload = multer({ storage: storage });

// Create a directory to store images if it doesn't exist
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Endpoint to get farmer details
app.get("/FarmerDetails", function (req, res) {
  connection.query("SELECT * FROM FarmerDetails", function (err, result) {
    if (err) {
      return res.status(500).json({ message: err.message });
    } else {
      return res.status(200).json(result);
    }
  });
});

// Endpoint to handle form submission and image upload
app.post("/FarmerDetails", upload.single("image"), function (req, res) {
  console.log(req.body); // form fields
  console.log(req.file); // uploaded file

  // Ensure the required fields are provided
  if (
    !req.body.name ||
    !req.body.place ||
    !req.body.wasteType ||
    !req.body.weight ||
    !req.body.rate
  ) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  // Prepare the data for insertion into MySQL
  const farmerData = {
    name: req.body.name,
    // phone: req.body.phone, // Optional field
    place: req.body.place,
    address: req.body.address, // Ensure 'address' matches column name in DB
    email: req.body.email, // Optional field
    wastetype: req.body.wasteType, // Correct column name: wastetype
    weight: req.body.weight, // Correct column name: weight
    rate: req.body.rate, // Correct column name: rate
    image: req.file ? req.file.path : null, // store image file path in DB, or null if no image is uploaded
  };

  // Insert data into the database
  connection.query(
    "INSERT INTO FarmerDetails SET ?",
    farmerData,
    function (err, result) {
      if (err) {
        console.error("Error inserting data:", err);
        return res
          .status(500)
          .json({ message: "Error inserting data: " + err.message });
      } else {
        return res
          .status(200)
          .json({ message: "Farmer details added successfully" });
      }
    }
  );
});

// Start the server
app.listen(9001, () => {
  console.log("Server running on http://localhost:9001");
});
