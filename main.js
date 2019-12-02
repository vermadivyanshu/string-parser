var stringParser = require('./stringParser.js');

function main() {
  var input1 = "interview_attendance:P,interview_date:2019-04-15--to--2019-04-15,status:CAP";
  var input2 = "status:all,applied_date:2019-04-15--to--2019-04-15,screen_status:SR|NS";
  var input3 = "location:mumbai|delhi|pune,list_type:S,min_education:1";
  var input4 = "helloWorld";
  var input5 = "status:all,helloWorld";
  console.log("input1: ");
  console.log(input1);
  console.log("output1:");
  console.dir(stringParser(input1), {depth: null});
  console.log("input2: ");
  console.log(input2);
  console.log("output2:");
  console.dir(stringParser(input2), {depth: null});
  console.log("input3: ");
  console.log(input3);
  console.log("output3:");
  console.dir(stringParser(input3), {depth: null});
  console.log("input4: ");
  console.log(input4);
  console.log("output4:");
  console.dir(stringParser(input4),{ depth: null});
  console.log("input5: ");
  console.log(input5);
  console.log("output5:");
  console.dir(stringParser(input5),{depth: null});
}
main();