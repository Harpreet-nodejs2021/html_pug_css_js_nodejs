function evenNumIdentifier() {
    for (var evenOddNum = 0; evenOddNum < 101; evenOddNum++){
        if(evenOddNum % 2 == 0){
            console.log("Even Number = " + evenOddNum);
        }
    }
}

evenNumIdentifier();

/* Output Below

Even Number = 0
Even Number = 2
Even Number = 4
Even Number = 6
Even Number = 8
Even Number = 10
Even Number = 12

and so on

Even Number = 94
Even Number = 96
Even Number = 98
Even Number = 100
*/

//----------------------------------------------

function showUser() {
    let yourName = 'Harry', yourAge = 35, phoneNumber = "204-100-1111",yourStreet = 'Main St', yourPostCode = "R2X 1X1", areYouMarried = true;
    console.log('Your name is ' + yourName);
    console.log('Your age is '+ yourAge + ' years');
    console.log('Your phone number is '+ phoneNumber);
    console.log('Your street is '+ yourStreet);
    console.log('Your postal code is '+ yourPostCode);
    console.log('Are you married? : '+ areYouMarried);
}

showUser();

/* Output Below

Your name is Harry
Your age is 35 years
Your phone number is 204-100-1111
Your street is Main St
Your postal code is R2X 1X1
Are you married? : true

*/