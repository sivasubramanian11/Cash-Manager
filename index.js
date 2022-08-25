const billamount = document.querySelector(".bill-amount");
const cashgiven = document.querySelector(".cash-given");
const checkbutton = document.querySelector(".check-button");
const message = document.querySelector(".error-message");
const noOfNotes = document.querySelector(".no-Of-Notes");

const availableNotes = [2000, 500, 100, 20, 10, 1];

checkbutton.addEventListener("click", function ValidateBillAndCashAmount() {
    hidemessage();
    if (billamount.value >= 0) {
        if (cashgiven.value >= billamount.value) {
            const amounttobereturned = cashgiven.value-billamount.value;
            const calculateChange=amounttobereturned;
        } else {
            ShowMessage("The cash provided should be atleast equal to bill amount");
        }
    } else {
        ShowMessage("Invalid Amount");
    }
});

function hidemesssage() {
    message.style.display = "none";
}

function calculateChange(amounttobereturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes= Math.trunc(amounttobereturned/ availableNotes[i])
    };
    amounttobereturned %= availableNotes[i];
    noOfNotes[i].innerText=numberOfNotes;

}

function ShowMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}