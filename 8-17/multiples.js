var input = process.argv[2];

var number = 6;

var multiple = parseInt(input / number);
  var newNum = number * multiple;

if(input > newNum || input == newNum){
  var finalNum = newNum + newNum;
  console.log(finalNum);
}
