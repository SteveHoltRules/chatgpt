// const fs = require("fs");
// const path = require("path");
import fs from 'node:fs';
import path from 'node:path';

// const inquirer = require('inquirer');
import inquirer from "inquirer";
import {runCompletion} from "./index.js";


const questions = [
  {
    type: "input",
    name: "prompt",
    message: "What would you like to know?",
  },
];

function tryinit() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("Here are the inputs", answers.prompt)
      runCompletion(answers.prompt);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in current env
      } else {
        // something else
      }
    });
}

// function init() {
//     inquirer.prompt([questions]).then((inquirerResponses) => {
//         console.log('Passing Question to AI');
//         // runCompletion({ ...inquirerResponses});
//     })
// }

tryinit();