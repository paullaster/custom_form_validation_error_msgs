const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
    if(email.validity.typeMismatch){
       return email.setCustomValidity("Expect an email!");
    }
    email.setCustomValidity("");

})