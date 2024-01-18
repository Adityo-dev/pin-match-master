function generatePin (){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin (){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else{
        // console.log("Pin not 4 digit found", pin);
        return getPin();
    }
}

// Generate pin section --------------------------->
document.getElementById('generate-pin-btn').addEventListener('click', function(){
    
    // call getpin Function 
    const pin = getPin();

    // display pin 
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
   
})



// Calculator Section ---------------------------->
document.getElementById('calculator').addEventListener('click', function(event){

    const number = event.target.innerText;

    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersField.value;

    if (isNaN(number)){

        if (number === 'C') {
            typedNumbersField.value = '';
        }

        else if (number === '<') {
             const digits = previousTypedNumber.split('');
             digits.pop();
             const remainingDigits = digits.join('');
             typedNumbersField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumbersField.value = newTypedNumber;
    }
})


// Verify Pin section ----------------------->

document.getElementById('verify-pin-btn').addEventListener('click', function(){
    const displayPinField  = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const currentTypeNumber = typedNumbersField.value;



    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (currentPin === currentTypeNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }

    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }


    // Clear all Value ------------------>
    
      const displayPin = document.getElementById('display-pin');
      displayPin.value = '';

      typedNumbersField.value = '';
})