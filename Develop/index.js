// TODO: Include packages needed for this application
let fs = require("fs");
let inquirer = require("inquirer");
let generateMarkdown = require("./generateMarkdown");
let axios = require("axios");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is you Githibn user name ?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "repository",
  },
  {
    type: "input",
    message: "What is your title ?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the project description?",
    name: "description",
  },

  {
    type: "input",
    message: "What are the installation requirements?",
    name: "installation",
  },

  {
    type: "input",
    message: "What are the instructions while using this project ?",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter the names of any contributors:",
    name: "contirbutors",
    default: "Aimee Mattson",
  },
  {
    type: "input",
    message: "Test examples for this project:",
    name: "test",
  },
];


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => {
    const queryUrl = "https://api.github.com/users/" + data.username;

    axios.get(queryUrl)
    .then (response => {
      let githubUser = {
        email: response.data.email,
        profile: response.data.html_url,
        name: response.data.name,
      };
      fs.writeFile("README.md", generateMarkdown(data,githubUser),
        function (err) {
          if (err) {
            throw err;
          };
          console.log("New README file created with success!");
        }
      );
    });
  });
}

// Function call to initialize app
init();
