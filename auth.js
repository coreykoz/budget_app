function login() {
    var password = document.getElementById("password").value;
    this.http.open("get", this.action, false, password);
    this.http.send("");
    if (http.status == 200) {
        document.location = this.action;
    } else {
        alert("Incorrect username and/or password.");
    }
    return false;
}