document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-input-field');

    //check validation
    if(isNaN(newWithdrawAmount)){
        alert('please enter a valid number');
        return;
    }
    
    const previousWithdrawTotal = getTextElementValueById('withdraw-field');
    const previousBalanceTotal = getTextElementValueById('balance-field');

    //check validation
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank a ato tk nai');
        return;
    }

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-field',newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-field',newBalanceTotal);
})