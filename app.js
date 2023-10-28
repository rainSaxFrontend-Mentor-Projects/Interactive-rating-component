document.querySelector("#thank-you").style.display = "none";
var rating = "Nothing";

function switchState() {
    document.querySelector("#rating").style.display = "none";
    document.querySelector("#thank-you").style.display = "flex";
    document.querySelector("#rating-response").textContent = "You selected " + rating + " out of 5";
}

function setRating(element, value) {
    rating = value;
    element.setAttribute("active", "true");
    element.style.backgroundColor = "#FC7614";
    element.style.color = "white";

    // now default styles for any previously selected number
    var values = [];
    var idx = element.textContent - 1;
    var values = document.querySelectorAll(".value");
    for (var i = 0; i < values.length; i++) {
        if (i == idx)
            continue;
        values[i].setAttribute("active", "false");
        values[i].style.backgroundColor = "#262E38";
        values[i].style.color = "#969FAD";
    }
}