var operator = (process.argv[2]);

var num1 = parseFloat(process.argv[3]);

var num2 = parseFloat(process.argv[4]);

if(operator == "add"){
  console.log(num1 + num2);
}

else if(operator == "subtract"){
  console.log(num1 - num2);
}

else if(operator == "multiply"){
  console.log(num1 * num2);
}

else if(operator == "divide"){
  console.log(num1 / num2);
}

else if(operator == "remainder"){
  console.log(num1 % num2);
}

else if(operator == "power"){
  console.log(num1 ** num2);
}

else{
  console.log("error: not a recognized command");
}
