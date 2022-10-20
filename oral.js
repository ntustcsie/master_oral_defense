const gas = "https://script.google.com/macros/s/AKfycby3DisxyDR89gCyrLKolCaj6TGVPpdhrDTyGFHaLqyRQTOuRf9Plzc4V_YnkXYmp8cI4g/exec";

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("uuid")) {
        $("iframe").attr("src", `${gas}?uuid=${urlParams.get("uuid")}`);
    } else {
        $("iframe").attr("src", gas);
    }
});
