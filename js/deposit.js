document.getElementById('btn-deposit').addEventListener('click',function(){
    //deposit part
    const newDepositAmount = getInputFieldValueById('deposit-input-field');
    //check validation
    if(isNaN(newDepositAmount)){
        alert('please enter a valid number');
        return;
    }
    
    const previousDepositTotal = getTextElementValueById('deposit-field');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-field',newDepositTotal);

    //balance part
    const previousBalanceTotal = getTextElementValueById('balance-field');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-field',newBalanceTotal);
})