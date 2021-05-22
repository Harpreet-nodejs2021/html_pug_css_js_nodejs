var phrase1 = "Using the ", phrase2 = "concat method";
console.log(phrase1.concat(phrase2)); // Using the concat method

var text1 = "HELLO", text2 = "javascript", text3 = "WORLD";
let text1Convert = text1.toLowerCase();
let text2Convert = text2.toUpperCase();
let text3Convert = text3.toLowerCase();

console.log(text1Convert.concat(' ' + text2Convert + ' ' + text3Convert));
// hello JAVASCRIPT world

var message1="Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";

console.log(message1.toUpperCase());
console.log(message1.toLowerCase());

var message2="Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. ";

console.log(message2.toUpperCase());

var message3="Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";

console.log(message3.toLowerCase());

message2 = message2 + "\n";
message3 = message3 + "\n";

var finalString = message2.toUpperCase().concat(message3.toLowerCase());

// Alternative way to concat strings using + Operator

//var finalString = message2.toUpperCase() + message3.toLowerCase();

console.log(finalString);

// READY PLAYER ONE IS A 2011 SCIENCE FICTION NOVEL, AND THE DEBUT NOVEL OF AMERICAN AUTHOR ERNEST CLINE. THE STORY, SET IN A DYSTOPIAN 2044, FOLLOWS PROTAGONIST WADE WATTS ON HIS SEARCH FOR AN EASTER EGG IN A WORLDWIDE VIRTUAL REALITY GAME, THE DISCOVERY OF WHICH WILL LEAD HIM TO INHERIT THE GAME CREATOR'S FORTUNE.
// cline sold the rights to publish the novel in june 2010, in a bidding war to the crown publishing group (a division of random house)]. the book was published on august 16, 2011. an audiobook was released the same day; it was narrated by wil wheaton, who was mentioned briefly in one of the chapters.ch. 20 in 2012, the book received an alex award from the young adult library services association division of the american library association and won the 2012 prometheus award.

console.log("The message has " + finalString.length + " characters long");
// The message has 793 characters long