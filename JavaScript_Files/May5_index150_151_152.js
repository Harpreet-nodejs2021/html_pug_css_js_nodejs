var deepThought = {
    name:'Deep Thought',
    answerToTheUltimateQuestionOfLife:function(){
    console.log(42);
}};

deepThought.answerToTheUltimateQuestionOfLife(); // 42

//---------------------------------------------

var groot = {
    greeting: function(){
        return "I'm Groot!!";
    },
    speak: function(){
        return "I'm Groot!!";
    }
    };

console.log('Greet: '+ groot.greeting()); // Greet: I'm Groot!!
console.log('Speak: '+ groot.speak()); // Speak: I'm Groot!!

//---------------------------------------------

var user = {
    username: null,
    password: null,
    // method "greet"
    greet: function(){
    if(this.username !== null){
        console.log("Hello, I'm user " + this.username);
    }else{
        console.log('Please assign a username value'); 
    }},
    // method "updateUsername"
    updateUsername: function(str1){
        this.username = str1;
    },
    // method "updatePassword"
    updatePassword: function(str2){
        this.password = str2;
    },
};

user.greet(); // Please assign a username value
user.updateUsername('Chloe'); 
user.updatePassword('c@nada150');
user.greet(); // Hello, I'm user Chloe