const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
    if(email.validity.typeMissmatch){
        email.setCustomValidity("Expect an email!")
    }
})