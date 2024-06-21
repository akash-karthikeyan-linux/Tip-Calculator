function calculateTotalBill()
{
    let billAmount = document.getElementById("billAmount");
    let percentageTip = document.getElementById("percentageTip");
    let tipAmount = document.getElementById("tipAmount");
    let totalAmount = document.getElementById("totalAmount");
    let errorMessage = document.getElementById("errorMessage");


    if(billAmount.value === "")
        {
            errorMessage.textContent = "Please Enter a Valid Input";
        }

    else if(percentageTip.value === "")
        {
            errorMessage.textContent = "Please Enter a Valid Input";
        }

    else
        {
            let bill_amount = parseInt(billAmount.value);
            let percentage_tip = parseInt(percentageTip.value);
            errorMessage.textContent = "";
            let tip_amount = (percentage_tip / 100) * bill_amount;
            let total = tip_amount + bill_amount;
            tipAmount.value = tip_amount;
            totalAmount.value = total;
        }
}