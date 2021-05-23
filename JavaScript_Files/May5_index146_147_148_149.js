var user = {username:'batman',password:'Alfred1960ROCKS!'};
// function accepts two parameters
function shouldOpenBatCave1(username,password){
    if(username == 'batman' && password == 'Alfred1960KPO!'){
        return true;
    }else{
        return false;
    }    
}
// Passing Object properties as function parameter
if(shouldOpenBatCave1(user.username,user.password)){
    console.log('Welcome back batman!!');    
}else{
    console.log("Sorry, you can't enter the Batcave, try again.."); // This string gets printed
}

//--------------------------------------------

// function accepts object as parameter
function shouldOpenBatCave2(user){
    if(user.username == 'batman' && user.password == 'Alfred1960KPO!'){
        return true;
    }else{
        return false;
    }    
}

if(shouldOpenBatCave2(user)){
    console.log('Welcome back batman!!');    
}else{
    console.log("Sorry, you can't enter the Batcave, try again.."); // This string gets printed
}

//--------------------------------------------

var superhero = {
    name:'Batman',
    secretName:'Bruce',
    sidekick:['Robin', 'Alfred', 'Gordon'],
    strength:70,
};
console.log(superhero.name); // Batman
console.log(superhero.secretName); // Bruce
console.log(superhero.sidekick); // ['Robin', 'Alfred', 'Gordon'] -> Array
console.log(superhero.strength); // 70

console.log(superhero.speed); // undefined Object property

superhero.speed = 80;
console.log(superhero.speed); // 80

//--------------------------------------------

var userInfo = {
    fullName:'Henry Leger', // String Type
    age:33, // Number Type
    myWorkInfo: {profession: 'nurse', workplace: 'Manitoba Clinic', isFullTime: false, yearsOfExp: 04}, // Object inside Object
    isCanadian: true, // Boolean Type
    siblings: ['Gary', 'John', 'Michael'] // Array
};

userInfo.address = '100 Yonge Street';
userInfo.city = 'Toronto';
userInfo.isVaccinated = true;
userInfo.favSport='Tennis';
userInfo.favDestination = "Cape Breton Island";

console.log(userInfo);

/*
{
  fullName: 'Henry Leger',
  age: 33,
  myWorkInfo: {
    profession: 'nurse',
    workplace: 'Manitoba Clinic',
    isFullTime: false,
    yearsOfExp: 4
  },
  isCanadian: true,
  siblings: [ 'Gary', 'John', 'Michael' ],
  address: '100 Yonge Street',
  city: 'Toronto',
  isVaccinated: true,
  favSport: 'Tennis',
  favDestination: 'Cape Breton Island'
}
*/