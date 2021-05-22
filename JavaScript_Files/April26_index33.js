var userCount = 100;
userCount += 5;
console.log("User count 1: "+ userCount); // 105

userCount -= 3;
console.log(`User count 2: ${userCount}`); // 102

userCount *= 2;
console.log(`User count 3: ${userCount}`); // 204

let menCount = userCount * 0.5, womenCount = userCount * 1/2;

console.log("User count: " + userCount + ", Men users: " + menCount + " & Women users: " + womenCount);// 204, 102, 102

let userCountPercent = 100; menCountPercent = 50, womenCountPercent = 50;

console.log(`User count: ${userCountPercent}%, Men users: ${menCountPercent}% & Women users: ${womenCountPercent}%`); // 100%, 50%, 50%
