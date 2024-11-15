
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", function() {
        let answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }
   
    alert("Form submitted successfully!");
    return false; 
}

document.getElementById("bg-change-btn").addEventListener("click", function() {
    let colors = ["#FF4C4C", "#262626", "#1a1a1a", "#FF3333"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});