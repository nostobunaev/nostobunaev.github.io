function calculate() {
    let service = document.getElementById("cservicecombo").value;
    let time = document.getElementById("cTime").value;
    let persons = document.getElementById("cPers").value;
    let work = document.getElementById("cDur").value;
    let pricee = document.getElementById("aPrice");
    let price = 0;

    console.log("service:", service)

    switch(persons) {
        case "one":
            price +=30;
            break;
        case "two":
            price +=60;
            break;
        case "more":
            price +=90;
            break;
    }

    switch(work) {
        case "lessOne":
            price *=1;
            break;
        case "three":
            price *=3;
            break;
        case "less":
            price *=8;
            break;
    }

    switch(service) {
        case "locksmith":
            price +=25;
            break;
        case "moving":
            price +=20;
            break;
        case "auto":
            price +=40;
            break;
        case "cleaning":
            price +=30;
            break;
        case "tech":
            price +=35;
            break;
        case "beauty":
            price +=15;
            break;
        case "other":
            price +=30;
            break;
    }

    switch(time) {
        case "asap":
            price +=50;
            break;
        case "hours":
            price +=40;
            break;
        case "day":
            price +=30;
            break;
        case "week":
            price +=20;
            break;
    }

    pricee.innerHTML = `<li id="su">Estimated cost of your service request: $${price}</li>`
}