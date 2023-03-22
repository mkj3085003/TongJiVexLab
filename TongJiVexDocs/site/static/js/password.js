function checkPassword() {
    var password = prompt("Please enter password:");
    if (password == null || password == "") {
        window.location.href = "about:blank";
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText == "success") {
                    document.body.className += " show";
                } else {
                    window.location.href = "about:blank";
                }
            }
        };
        xhttp.open("GET", "/password?password=" + password, true);
        xhttp.send();
    }
}
checkPassword();