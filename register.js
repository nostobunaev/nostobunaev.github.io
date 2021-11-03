function checkForm() {
    let firstName = document.getElementById("firstName");
    let secondName = document.getElementById("secondName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("passwordConfirm");
    let error = document.getElementById("formErrors");
    let errorsFound = false;

    if (!firstName.value) {
        errorsFound = true;
        let errorName = document.createElement("li");
        errorName.textContent = "Missing first name.";
        error.appendChild(errorName);
     }
    
     if (!secondName.value) {
        errorsFound = true;
        let errorName = document.createElement("li");
        errorName.textContent = "Missing second name.";
        error.appendChild(errorName);
     }
  
     if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
        errorsFound = true;
        let errorEmail = document.createElement("li");
        errorEmail.textContent = "Invalid or missing email address.";
        error.appendChild(errorEmail);
     }
  
     if (!password.value || !/[A-Z]/.test(password.value)) {
        errorsFound = true;
        let errorPass3 = document.createElement("li");
        errorPass3.textContent = "Password must contain at least one uppercase character.";
        error.appendChild(errorPass3);
     }
  
     if (!password.value || !/[0-9]/.test(password.value)) {
        errorsFound = true;
        let errorPass4 = document.createElement("li");
        errorPass4.textContent = "Password must contain at least one digit.";
        error.appendChild(errorPass4);
     }
  
     if (passwordConfirm && password.value !== passwordConfirm.value) {
        errorsFound = true;
        let errorPass5 = document.createElement("li");
        errorPass5.textContent = "Password and confirmation password don't match.";
        error.appendChild(errorPass5);
     }
  
     if (errorsFound === false) {
        error.classList.add('hide');
     }
  } 
  
document.getElementById("submit").addEventListener("click", function(event) {
    if (error.length > 1000) {
        error.innerHTML = '';
    }
    else {
        checkForm();
        event.preventDefault();
    }
});