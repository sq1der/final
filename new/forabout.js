document.getElementById("popup-btn").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "none";
});


document.querySelector("#popup-btn").addEventListener("click", () => {
    const sound = new Audio("notification.wav");
    sound.play();
});