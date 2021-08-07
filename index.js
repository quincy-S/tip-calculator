const billInput = document.querySelector(".dollar-input-side")
const tipButton = document.querySelectorAll(".custom")
const specialTip = document.querySelector(".custom-button")
const peopleInput = document.querySelector(".people-input-side")
const tipAmount = document.querySelector(".tip-amt")
const totalAmount = document.querySelector(".total-amt")
const resetButton = document.querySelector(".reset-button")
var tipPercent;

function resetBill(){
    billInput.value = ""
    specialTip.value= ""
    peopleInput.value=""
    tipAmount.value="$"+"0.00"
    totalAmount.value="$"+"0.00"
}

function handleTip(tip) {
    tipPercent = tip.target.value
    tipPercent = parseFloat((tipPercent / 100) .toFixed(2))
    calculateBill()
}

// Calculate total bill amount plus tip
function calculateBill() {
    var tipPerPerson = (billInput.value*tipPercent)/peopleInput.value
    var totalPerPerson = (billInput.value/peopleInput.value)+tipPerPerson
    
    if(billInput.value>0 && peopleInput.value>0 && tipPercent){
        tipAmount.innerHTML="$"+ parseFloat(tipPerPerson.toFixed(2))
        totalAmount.innerHTML="$"+ parseFloat(totalPerPerson.toFixed(2)) 
    } 
    
    
}

for(i=0; i<tipButton.length;i++){
    tipButton[i].addEventListener("click",handleTip)
}
specialTip.addEventListener("input",handleTip)
resetButton.addEventListener("click",resetBill)
billInput.addEventListener("input", calculateBill)
peopleInput.addEventListener("input", calculateBill)
