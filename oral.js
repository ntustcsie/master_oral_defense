const gas = "https://script.google.com/macros/s/AKfycbySdHwy3xJbrQJpa4BeOVemmH2qXGRSslaR84_1t7EUNzL72vro7HtgN95hBGkDciUrqw/exec";

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("uuid")) {
        $("iframe").attr("src", `${gas}?uuid=${urlParams.get("uuid")}`);
    } else {
        $("iframe").attr("src", gas);
    }
});
