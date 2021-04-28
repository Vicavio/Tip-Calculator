let totalAmount = document.getElementById("totalBill");
let qualityService = document.getElementsByName("level");
let numOfPpl = document.getElementById("numOfClients");
//let tip = document.getElementById("tipCalc");
document.getElementById("tipCalc").addEventListener("click", calculateTip);
/*document.getElementById("finalTip").style.display = "block";*/



function calculateTip() {
    for (let i = 0; i < qualityService.length; i++){
        if(qualityService[i].checked)
        document.getElementById("finalTip").innerHTML = ((totalAmount.value * qualityService[i].value) / numOfPpl.value);
    }
}
