document.addEventListener("DOMContentLoaded", function() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
        document.getElementById("profile-username").textContent = userDetails.username;
        document.getElementById("profile-email").textContent = userDetails.email;
    }
});
