const billAmount = document.querySelector("#bill-amount"),
cashGiven = document.querySelector("#cash-given"),
checkButton = document.querySelector("#check-button"),
message = document.querySelector("#error-message"),
noOfNotes = document.querySelectorAll(".no-of-notes"),
nextButton = document.querySelector(".next");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


function validateBillAndCashAmount() {
    hideMessage();
    console.log("Bill amount entered:",billAmount.value);
    console.log("Cash amount entered:",cashGiven.value);
    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid bill amount");
    }
}

function calculateChange(amountToBeReturned){
    // go over all the available
    for(let i = 0; i < availableNotes.length; i++) {
        // no of notes need for the denomination
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        //amount left after the number of notes needed
        amountToBeReturned %= availableNotes[i];

        //updating the no of Notes in the table for the current amount
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}


function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

// nextButton.addEventListener("click",nextButtonOperation);
checkButton.addEventListener("click", validateBillAndCashAmount);
