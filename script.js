document.addEventListener("DOMContentLoaded", () => {
    // 1. SELECT FORM AND FEEDBACK DIV
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // 2. LISTEN TO SUBMIT EVENT
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent reload

        // 3. RETRIEVE AND TRIM USER INPUTS
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // 4. INITIALIZE VALIDATION VARIABLES
        let isValid = true;
        const messages = [];

        // 5. USERNAME VALIDATION
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        // 6. EMAIL VALIDATION
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // 7. PASSWORD VALIDATION
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        // 8. DISPLAY FEEDBACK
        feedbackDiv.style.display = "block"; // make visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green success color

            // OPTIONAL: Reset form after success
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red error color
        }
    });
});