const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

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
    const childrenArray = Array.from(form.childNodes)
    childrenArray.forEach((child) => {
        if(!child.children){
            console.log(child)
        }
    })
    //console.log(childrenArray)
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }
})


const showError = () => {
    if(email.validity.valueMissing){
        emailError.innerHTML = "Email is missing!";

    }else if (email.validity.typeMismatch){
        emailError.innerHTML = "Please enter a valid email!";

    }else if(email.validity.tooShort){
        emailError.innerHTML = `
        Email too short!
        You've entered a ${email.value.length} 
        ${email.value.length > 1 ? "characters": "character"} long email.
        Minimum length required: ${email.minLength} characters
        `;
    }
    emailError.className = "error active";
}