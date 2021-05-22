
var message="3.14 it's a great number but 42 it's the answer to life.";
var pi=parseFloat(message.substr(0,4));
var answerToLife=parseInt(message.substr(29,31));

var result = pi + answerToLife;

console.log('answerToLife, ' + answerToLife);
console.log('pi, ' + pi);
console.log('result, '+ result);
// answerToLife, 42
// pi, 3.14
// result, 45.14

result = result.toString();
console.log(`On adding value of pi and answerToLife, we get resultant as ${result}`);
// On adding value of pi and answerToLife, we get resultant as 45.14