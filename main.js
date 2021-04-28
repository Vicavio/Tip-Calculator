let totalAmount = document.getElementById("total");
let qualityService = document.getElementsByName("level");
let numOfPpl = document.getElementById("numOfClients");

document.getElementById("tipCalc").addEventListener("click", calculateTip);

function calculateTip() {
    for (let i = 0; i < qualityService.length; i++){
        if(qualityService[i].checked)
        document.getElementById("finalTip").innerHTML = ((totalAmount.value * qualityService[i].value) / numOfPpl.value);
    }
}
