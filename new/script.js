
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", function() {
        let answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

document.getElementById("popup-btn").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "none";
});

document.getElementById("bg-change-btn").addEventListener("click", function() {
    let colors = ["#FF4C4C", "#262626", "#1a1a1a", "#FF3333"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

function displayDateTime() {
    const dateTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    document.getElementById("current-date").innerHTML = dateTime.toLocaleDateString("en-US", options);
}

setInterval(displayDateTime, 1000);

document.querySelector("#popup-btn").addEventListener("click", () => {
    const sound = new Audio("notification.wav");
    sound.play();
});

const themeToggleButton = document.getElementById("theme-toggle-btn");
const themeLink = document.querySelector('link[rel="stylesheet"]');

const isDarkTheme = localStorage.getItem("theme") === "dark";
themeLink.href = isDarkTheme ? "style.css" : "light.css";
themeToggleButton.textContent = isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme";

themeToggleButton.addEventListener("click", () => {
    const darkMode = themeLink.href.includes("style.css");
    themeLink.href = darkMode ? "light.css" : "style.css";
    themeToggleButton.textContent = darkMode ? "Switch to Dark Theme" : "Switch to Light Theme";
    localStorage.setItem("theme", darkMode ? "light" : "dark");
});


