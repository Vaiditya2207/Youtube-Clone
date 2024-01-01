function signin() {
    window.location.href = "signin.html"
}

function subscribe() {
    let is_sub = document.getElementById("subscribe").innerHTML;
    if (is_sub === "Subscribe") {
        document.getElementById("subscribe").innerHTML = "Subscribed";
        document.getElementById("subscribe").classList.add("subscribed");
    } else {
        document.getElementById("subscribe").innerHTML = "Subscribe";
        document.getElementById("subscribe").classList.remove("subscribed");
    }
}

function mainPage() {
    window.location.href = "../index.html"
}

