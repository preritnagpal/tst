const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle login logic here
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle sign-up logic here
});

function selectPlan(plan) {
    // Simulate generating a payment QR code or link for the selected plan
    const paymentDetails = generatePaymentDetails(plan);

    // Display the payment section with the QR code and payment details
    document.getElementById("payment-qr-code").src = paymentDetails.qrCodeUrl;
    document.getElementById("payment-section").style.display = "block";
}

function generatePaymentDetails(plan) {
    // Simulate generating payment details based on the selected plan
    // In a real implementation, you would use a payment gateway or service
    const qrCodeUrl = "https://example.com/payment-link-for-" + plan;
    // Add more payment details as needed

    return {
        qrCodeUrl,
        // Other payment details
    };
}