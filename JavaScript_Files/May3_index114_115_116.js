
function revert(text) {
    var reversetext = ''; // Empty string
    for(let stringIndex = text.length - 1; stringIndex >= 0; stringIndex--){
        reversetext += text.charAt(stringIndex);
        // Alternatively, use String[index] in place of "String.charAt" Method.
        // reversetext = reversetext + text[stringIndex];
    }
    console.log(reversetext);
}

revert('hello'); // olleh
revert('Singh'); // hgniS
revert('January'); // yraunaJ
revert("Harry"); // yrraH
revert('Winnipeg'); // gepinniW
revert('Toronto'); // otnoroT

//-----------------------------------------------------

function getLongerText(str1,str2) {
    if(str1.length > str2.length){
        console.log(str1);
    }else{
        console.log(str2);
    }
}

getLongerText('Winnipeg','Surrey'); // Winnipeg
getLongerText('California','Texas'); // California
getLongerText('NS','PEI'); // PEI

//-----------------------------------------------------

function getHexaColor(webColor) {
    if(webColor=="white"){
        return '#FFFFFF';
    }else if(webColor=="black"){
        return '#000000';
    }else if(webColor=="blue"){
        return '#0b24fb';
    }else if(webColor=="green"){
        return '#0e7e12';
    }else if(webColor=="yellow"){
        return '#fffd38';
    }else if(webColor=="pink"){
        return '#fec1cc';
    }else{
        return 'Please choose a web color out of: white, black, blue, green, yellow, or pink.'
    }
}

var outputHex = getHexaColor('white');
console.log(outputHex); // #FFFFFF

outputHex=getHexaColor('black');
console.log(outputHex); // #000000

outputHex=getHexaColor('blue');
console.log(outputHex); // #0b24fb

outputHex=getHexaColor('green');
console.log(outputHex); // #0e7e12

outputHex=getHexaColor('yellow');
console.log(outputHex); // #fffd38

outputHex=getHexaColor('pink');
console.log(outputHex); // #fec1cc

outputHex=getHexaColor('cyan');
console.log(outputHex); // Please choose a web color out of: white, black, blue, green, yellow, or pink.

outputHex=getHexaColor('green');
console.log(outputHex); // #0e7e12