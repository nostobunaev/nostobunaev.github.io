function hide2() {
    let x = document.getElementById("cbCountry");
    let country = document.getElementById("fCountry");
    let state = document.getElementById("fState");
    let zip = document.getElementById("fZip");

    if (x.checked == true) {
        country.style.display = "block";
        state.style.display = "none";
        zip.style.display = "none";
    }
    else {
        country.style.display = "none";
        state.style.display = "block";
        zip.style.display = "block";
    }
}