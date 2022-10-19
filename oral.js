const gas = "https://script.google.com/macros/s/AKfycbyiCKco2ieUj-3p9W31AYccrn1D9Knttc5ARFjtz1yZmmrXPOdIThCZEmEI7wy7QHWWyA/exec";

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("uuid")) {
        $("iframe").attr("src", `${gas}?uuid=${urlParams.get("uuid")}`);
    } else {
        $("iframe").attr("src", gas);
    }
});
