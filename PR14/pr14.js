document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }
    const password = document.getElementById("password").value;
    const passwordStrengthPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    } else if (!passwordStrengthPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number.";
        isValid = false;
    }
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }
    if (isValid) {
        alert("Registration successful!");
    }
});
