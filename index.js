var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

function play(questionObj) {
  var question = questionObj.question;
  var answer = questionObj.answer;

  console.log(question);

  var userAns = readlineSync.question("Enter your answer: ");
  
  if(userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct\n"));
    score += 1;
  }else {
    console.log(chalk.red("Wrong. The correct answer is "+ answer + "\n"));
  }
}

console.log("Welcome to " + chalk.italic("How well do you know me Quiz.\n"));

const questions = [
  {
    question: `What is my birth year?`,
    answer:"1999"
  }, 
  {
    question: `What is my favourite sport?`,
    answer: "MMA"
  },
  {
    question: `Who is my favourite athlete?`,
    answer: "Brock Lesnar"
  },
  {
    question: `What is my favourite season?`,
    answer: "Winter"
  },
  {
    question: `What is the name of famous canadian psychologist `,
    answer: "Jordan Peterson"
  }
];

for(var i=0; i<questions.length; i++) {
  play(questions[i]);
}

console.log("Your final score is : " + score);