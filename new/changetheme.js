document.addEventListener("DOMContentLoaded", function() {
    displayDateTime();
    setInterval(displayDateTime, 1000);
});

function displayDateTime() {
    const dateTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const currentDateElement = document.getElementById("current-date");
    if (currentDateElement) {  
        currentDateElement.innerHTML = dateTime.toLocaleDateString("en-US", options);
    }
}

const themeToggleButton = document.getElementById("theme-toggle-btn");
const themeLink = document.querySelector('link[rel="stylesheet"]');

let isDarkTheme = localStorage.getItem("theme") === "dark";
themeLink.href = isDarkTheme ? "style.css" : "light.css";
themeToggleButton.textContent = isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme";

themeToggleButton.addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    themeLink.href = isDarkTheme ? "style.css" : "light.css";
    themeToggleButton.textContent = isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
});
