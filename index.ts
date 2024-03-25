#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\n***********************simple_calculator_by_sirgkhan*********************\n\n");
let answer=await inquirer.prompt
([
  {name:"num1" , type:"number" , message:"enter any first number"},
  {name:"num2", type:"number" , message:"enter any second number"},
  {
    name:"operator_A", 
    type:"list" , 
    message:"enter any operator from the given choices",
    choices:["Addition","Subtraction","Multiplication","Division"], 
  },
]);

console.log(answer);

 switch(answer.operator_A)
 {
 case "Addition":console.log( answer.num1 + answer.num2);
 break;
 case "Subtraction":console.log( answer.num1 - answer.num2);
 break;
 case "Multiplication":console.log( answer.num1 * answer.num2);
break;
case "Division":console.log( answer.num1 / answer.num2);
break;
 
default :console.log(" invalid operator");
 break;
 }