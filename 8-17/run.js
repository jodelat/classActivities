var stuffINeed = require("./bands.js");

var bandList = stuffINeed.bands;

for(var property in bandList){
  console.log("A" + property + "band is" + bandList[property]);
}
