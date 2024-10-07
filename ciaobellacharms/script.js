// JavaScript Doucument
// Function to validate the username
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z]+$/;
    return username && username.length <= 15 && usernameRegex.test(username);
}

// Function to validate the password
function validatePassword(password) {
    return password && password.length >= 10 && password.length <= 20;
}

// Function to validate the name
function validateName(name) {
    return name.trim() !== '';
}

// Function to validate the phone number (format: xxx-xxx-xxxx)
function validatePhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

// Function to validate the email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to update the credit card type
function updateCreditCardType() {
    const cardNumber = document.getElementById('credit-card').value;
    const creditCardType = document.getElementById('creditCardType');

    if (cardNumber) {
        const firstDigit = cardNumber.charAt(0);
        let cardType = '';

        switch (firstDigit) {
            case '4':
                cardType = 'Visa';
                break;
            case '5':
                cardType = 'MasterCard';
                break;
            case '6':
                cardType = 'Discover';
                break;
            case '3':
                cardType = 'American Express';
                break;
            default:
                cardType = 'Unknown';
        }

        creditCardType.textContent = `Card Type: ${cardType}`;
    } else {
        creditCardType.textContent = '';
    }
}

// Initialization function to set up event listeners
function init() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Perform validation
            if (validateUsername(username) && validatePassword(password)) {
                // Redirect to the account update page
                window.location.href = 'update.html';
            } else {
                // Display an error message if validation fails
                alert('Please enter a valid username and password.');
            }
        });
    }

    const updateButton = document.getElementById('updateButton');
    if (updateButton) {
        updateButton.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const creditCard = document.getElementById('credit-card').value;

            // Perform validation
            if (validateName(name) && validatePhone(phone) && validateEmail(email) && creditCard.length === 16) {
                alert('Account information updated successfully!');
            } else {
                alert('Please enter valid account information.');
            }
        });

        // Event listener for the credit card input to update card type
        document.getElementById('credit-card').addEventListener('input', updateCreditCardType);
    }
}

// Set up the initialization function to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
