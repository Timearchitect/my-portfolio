const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
//app.use("/projects", require("./routes/projects.js"));

//PORT=3000
//MONGO_URI=mongodb://localhost:27017/portfolioDB
mongoose.connect("mongodb://localhost:27017/portfolioDB");


app.get('/', (req,res) =>{
  res.send  ("HEllo world")
})
app.get('/about', (req,res) =>{
  res.send(   )
})
app.post('/')

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB error:", err.message);
  });
 