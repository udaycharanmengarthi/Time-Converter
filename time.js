let convertBtnEl = document.getElementById("convertBtn");

convertBtnEl.addEventListener("click", function getSeconds() {

    let hoursInputEl = parseInt(document.getElementById("hoursInput").value);
    let minutesInputEl = parseInt(document.getElementById("minutesInput").value);
    let seconds = ((hoursInputEl) * 60 + minutesInputEl) * 60;
    let errorMsgEl = document.getElementById("errorMsg");
    let timeInSecondsEl = document.getElementById("timeInSeconds");

    if (isNaN(hoursInputEl) || isNaN(minutesInputEl)) {
        errorMsgEl.textContent = "Please enter any value";
        errorMsgEl.style.color = "#f5f7fa";

    } else {
        timeInSecondsEl.textContent = seconds;
        timeInSecondsEl.style.color = "#ffffff";

    }

})