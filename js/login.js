document.getElementById('submit-btn').addEventListener('click',function(){
    const userId = document.getElementById('user-id');
    const email = userId.value;

    const userPassword =document.getElementById('user-password');
    const password = userPassword.value;

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href ="deposit.html";
    }
    else {
        alert('Tui password vule gesos!! Toke tejjo putro ghoshona korlam.');
    }
 
})