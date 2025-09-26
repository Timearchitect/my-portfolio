const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");

dotenv.config();

async function listProjects() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const projects = await Project.find({});
    console.log("Projects in the database:");
    console.log(projects);

  } catch (err) {
    console.error("Error fetching projects:", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}

listProjects();
