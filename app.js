const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

const showError = () => {
    if(emailError.validity.valueMissing){
        emailError.innerHTML = "Email is missing!";
        return;
    }
    if (email.validity.typeMismatch){
        emailError.innerHTML = "Please enter a valid email!";
        return;
    }
    if(email.validity.tooShort){
        
    }
}

email.addEventListener('input', (event) => {
    if(email.validity.valid){
        console.log(email.validity)
        emailError.textContent ='';
        emailError.className='error';
       //email.setCustomValidity("Expect an email!");
       return;
    }
    console.log(email.validity)
    showError();
    //email.setCustomValidity("");

});

form.addEventListener('submit', (event) => {
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
})