#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold ("\n\t Welcome to \'CodeWithSabi\' -TODO-LIST APPLICATION\n"));

let todoList = [];
let conditions = true;


while(conditions){
let addTask = await inquirer.prompt([
    {
        name:"task",
        type:"input",
        message:chalk.green("Enter your New Task : ")
    }
]);
let latestTask=addTask.task
todoList.push(latestTask);
console.log(latestTask+ "  Task addad in TODO-List successfully");


let addMoreTask = await inquirer.prompt([
    {
        name:"addmore",
        type:"confirm",
        message:chalk.green("Do you want to add more task? "),
        default:"False"
    }
]);
conditions=addMoreTask.addmore;

}
console.log("your updated TODO-List: ", todoList);
