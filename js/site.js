//Entry point AKA Controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let reversedString = reverseAString(inputString);

    displayString(reversedString);

}

//Logic Function
//Reverse the String
function reverseAString(userString) {
    let revString = '';

    // reverse the string
    for (let i = userString.length - 1; i >= 0; i = i - 1) { // starting value, condition 
        revString += userString[i];
    }

    return revString;

}

//View Function
function displayString(revString) {

    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');

}