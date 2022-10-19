const gas = "https://script.google.com/macros/s/AKfycbwQAkHFvFOtgvceelD7Kq_2eOmnZbCa7d6z_b7O7FF4rcTMN6WIrxX0FG9Ijh3jOuOt/exec";

$(document).ready(function () {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("uuid")) {
        $("iframe").attr("src", `${gas}?uuid=${urlParams.get("uuid")}`);
    } else {
        $("iframe").attr("src", gas);
    }
});
