// Importing the Express module
const express = require("express");

// Creating an instance of an Express application
const app = express();

// Defining the port number where the server will listen for requests
const port = 3003;

//Set the view engine to pug

app.set("view engine", "pug");

//Set the directory for views

app.set("views", "./views");

// Setting up a route for the root URL
app.get("/", (req, res) => {
  const items = ["Item 1", "Item 2", "Item 3"];
  res.render("index", { title: "Home", message: "Hello, World!", items });
});

// Starting the server and logging a message to the console
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
