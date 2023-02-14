const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', (event) => {
    if(email.validity.valid){
        console.log(email.validity)
        emailError.textContent ='';
       //return email.setCustomValidity("Expect an email!");
    }
    console.log(email.validity)
    email.setCustomValidity("");

})