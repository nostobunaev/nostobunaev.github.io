function checkForm() {
    let title = document.getElementById("ftitle")
    let desc = document.getElementById("fdescription")
    let price = document.getElementById("fprice")
    let error = document.getElementById("formErrors")
    let errorsFound = false;

    if (!title.value) {
        errorsFound = true;
        let errorTitle = document.createElement("li");
        errorTitle.textContent = "Missing title.";
        error.appendChild(errorTitle);
    }

    if (title.value.length >= 30) {
        errorsFound = true;
        let errorTitle2 = document.createElement("li");
        errorTitle2.textContent = "Titile must be less than 30 characters.";
        error.appendChild(errorTitle2);
    }

    if (!desc.value) {
        errorsFound = true;
        let errorDesc = document.createElement("li");
        errorDesc.textContent = "Missing description.";
        error.appendChild(errorDesc);
    }

    if (title.value.length >= 500) {
        errorsFound = true;
        let errorDesc2 = document.createElement("li");
        errorDesc2.textContent = "Titile must be less than 500 characters.";
        error.appendChild(errorDesc2);
    }

    if (!price.value) {
        errorsFound = true;
        let errorPrice = document.createElement("li");
        errorPrice.textContent = "Missing price.";
        error.appendChild(errorPrice);
    }

    if (price.value <0) {
        errorsFound = true;
        let errorPrice2 = document.createElement("li");
        errorPrice2.textContent = "Price can't be negative.";
        error.appendChild(errorPrice2);
    }
    
    if (errorsFound === false) {
        error.classList.add('hide');
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    event.preventDefault();
});