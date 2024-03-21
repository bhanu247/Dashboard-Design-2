function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var dummyEmail = "bhanu.p@hlbhamt.com";
    var dummyPassword = "Apple@9211";

    if(email === dummyEmail && password === dummyPassword) {
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        return false; // Prevent default form submission
    } else {
        alert('Invalid Credentials'); // User feedback
        return false; // Prevent default form submission
    }
}
