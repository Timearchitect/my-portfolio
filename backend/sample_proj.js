const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");

dotenv.config();

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    imageUrl: "/images/portfolio.png"
  },
  {
    title: "Todo App",
    description: "A simple todo app with CRUD functionality and local storage.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/todo-app",
    imageUrl: "/images/todo.png"
  },
  {
    title: "Weather App",
    description: "Weather forecast app using OpenWeather API.",
    techStack: ["JavaScript", "API", "CSS"],
    githubUrl: "https://github.com/yourusername/weather-app",
    imageUrl: "/images/weather.png"
  }
];

async function sampleDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    
    await Project.deleteMany({});
    console.log("Old projects removed");

    // lägg till nya
    await Project.insertMany(projects);
    console.log("Database inserted with example projects");

    mongoose.connection.close();
    console.log("🔒 MongoDB connection closed");
  } catch (err) {
    console.error("Error inserting database:", err);
  }
}

sampleDB();
