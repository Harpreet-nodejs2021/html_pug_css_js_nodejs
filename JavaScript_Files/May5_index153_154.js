var arithmetic = {
    add: function(param1, param2){
        if(typeof param1 == "number" && typeof param2 == "number"){
            console.log(param1 + param2);
        }else{
            console.log('Error! Please input numbers.');
        }
    },
    subtract: function(val1,val2){
        if(typeof val1 == "number" && typeof val2 == "number"){
            console.log(val1 - val2);
        }else{
            console.log('Error! Please input numbers.');
        }
    },
    multiply: function(input1,input2){
        if(typeof input1 == "number" && typeof input2 == "number"){
            console.log(input1 * input2);
        }else{
            console.log('Error! Please input numbers.');
        }
    },
    divide: function(num1,num2){
        if(typeof num1 == "number" && typeof num2 == "number"){
            console.log(num1/num2);
        }else{
            console.log('Error! Please input numbers.');
        }
    },
    remainder: function(arg1,arg2){
        if(typeof arg1 == "number" && typeof arg2 == "number"){
            console.log(arg1 % arg2);
        }else{
            console.log('Error! Please input numbers.');
        }
    }
};

arithmetic.add(2, 10); // 12
arithmetic.subtract(10, 5); // 5
arithmetic.multiply(3, 100); // 300
arithmetic.divide(40, 2); // 20
arithmetic.remainder(20, 2); // 0

//------------------------------------------

var player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy = this.energy - damage;
        if(this.energy <= 1){
            this.lives--; // Player lose a life
            this.energy = 0; // The player energy can't be negative, so reset to 0.
        }
    },
    recoverEnergy: function(energyUp){
        this.energy = this.energy + energyUp;
        // The player energy can't be more than 100
        if(this.energy >= 100){
            this.energy = 100; // Energy value reset to max level
        }
    },
    loseLife: function(){
        this.lives--;
    },
    recoverLife: function(){
        this.lives++;
        this.energy = 100; // Energy value reset to max level
        // The player lives can't be bigger than 99
        if(this.lives >= 99){
            this.lives = 99; // Number of Lives reset to max level
        }
    },
}

player.name='Joseph';

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 100 % energy and 3 lives

player.loseLife(); // Player lose a life

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 100 % energy and 2 lives

player.loseEnergy(10);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 90 % energy and 2 lives

player.loseEnergy(5);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 85 % energy and 2 lives

player.loseEnergy(15);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 70 % energy and 2 lives

player.loseEnergy(20);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 50 % energy and 2 lives

player.recoverEnergy(10);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 60 % energy and 2 lives

player.loseEnergy(30);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 30 % energy and 2 lives

player.loseEnergy(40);

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 0 % energy and 1 lives

player.loseLife();

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 0 % energy and 0 lives

player.recoverLife();

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 100 % energy and 1 lives

player.recoverLife();

console.log(`The Player ${player.name} has ${player.energy} % energy and ${player.lives} lives`); // The Player Joseph has 100 % energy and 2 lives