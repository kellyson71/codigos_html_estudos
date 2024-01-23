function validateLogin() {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    // Check if the entered email and password match the specified values
    if (emailInput === "kellyson.medeiros.pdf@gmail.com" && passwordInput === "kellyson123") {
        // Redirect to another page
        window.location.href = "another_page.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function forgotPassword() {
    alert("Manda mensagem no zap!"); // Display a message when "Esqueci minha senha" is clicked
}
