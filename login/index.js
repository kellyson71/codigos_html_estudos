function validateLogin() {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    // Check if the entered email and password match the specified values
    if (emailInput === "kellyson.medeiros.pdf@gmail.com" && passwordInput === "kellyson123") {
        // Redirect to another page
        window.location.href = "another_page.html";
    } else {
        alert("ainda vou fazer a pagina de cadastro");
    }
}

function forgotPassword() {
    alert("como vc esqueceu a senha? nem conta vc tem"); // Display a message when "Esqueci minha senha" is clicked
}
