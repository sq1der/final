function signup() {
    const username = document.getElementById("new-username").value;
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;

    if (username && email && password) {
        const userDetails = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        alert("Account created successfully! You can now log in.");
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
}
