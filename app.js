const form = document.querySelector('form');
const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
    if(email.validity.typeMismatch){
        console.log(email.validity)
       return email.setCustomValidity("Expect an email!");
    }
    console.log(email.validity)
    email.setCustomValidity("");

})