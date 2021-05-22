var playerName="Darian Durant is lame";
var teams="BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
var statement="Regina is the best Canadian city, Go Riders";

console.log(playerName.length); // 21
let result1=playerName.slice(0,16);
console.log(result1); // Darian Durant is

console.log(teams.length); // 96
let result2=teams.slice(66,72);
console.log(result2); // riders

console.log(statement.length); // 43
let result3=statement.slice(10,18);
console.log(result3); // the best

let result4=statement.slice(32,36);
console.log(result4); // , Go

let result5 = result2.slice(0,1).toUpperCase() + result2.slice(1);
console.log(result5); // R + iders = Riders

// Alternative way is to use a function

//function titleCase(str) {
//    newStr = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
//    return newStr;
//}

// let result5=titleCase(result2); //Riders

let finalOutput = result1.concat(' ' + result3 + ' ' + result5 + ' player' + result4 + ' ' + result5 + '!!');

console.log(finalOutput); //Darian Durant is the best Riders player, Go Riders!!

var userAndPassword='pepito2017,12345';
console.log(userAndPassword.length); // 16
var userName = userAndPassword.substr(0,10); // pepito2017
var passcode = userAndPassword.substr(11,15); // 12345

console.log(`The user ${userName} has ${passcode} as password`); //The user pepito2017 has 12345 as password