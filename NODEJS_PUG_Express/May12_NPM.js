// "require" - keyword

const priceGenerator = require('./May12_Module'); // priceGenerator is calling the function in the added path

console.log(priceGenerator(30)); // Calling "priceGenerator" is an alias to calling the function "priceCalculation" present in the other file

// Output - 50 * 30 = 1500

/*

JUST-EAT+harpreet.sidhu2@DESKTOP-EHD2CTA MINGW64 /c/Git/html_css_nodejs_mongodb/NODEJS_PUG_Express (master)
$ npm start

> nodejs_pug_express@1.0.0 start C:\Git\html_css_nodejs_mongodb\NODEJS_PUG_Express
> node May12_NPM.js

1500

*/