document.addEventListener("DOMContentLoaded", checkLoginStatus);

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));

        if (userDetails && userDetails.username === username && userDetails.password === password) {
            localStorage.setItem("username", username);
            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "profile.html";
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("Enter username and password.");
    }
}

function logout() {
    localStorage.removeItem("username");
    localStorage.setItem("isLoggedIn", "false");

    document.getElementById("welcome").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true" && username) {
        showWelcomeMessage(username);
    }
}

function showWelcomeMessage(username) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("welcome").style.display = "flex";
    document.getElementById("display-username").textContent = username;
}
