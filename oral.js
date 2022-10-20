const gas = "https://script.google.com/macros/s/AKfycbzNxrePxHdsLXgQIj3OiyttnR_90-6EsNznnCfobENKWEid-ZALkzuoxbFY6LHm_c2xjA/exec";

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("uuid")) {
        $("iframe").attr("src", `${gas}?uuid=${urlParams.get("uuid")}`);
    } else {
        $("iframe").attr("src", gas);
    }
});
