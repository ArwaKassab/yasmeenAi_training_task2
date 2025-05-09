document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload

    const username = document.getElementById('username').value;
    const email    = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const retype_password = document.getElementById('retype_password').value;

    fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            retype_password: retype_password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            document.getElementById('responseMessage').innerText = data.message;  // Display success message
        } else if (data.errors) {
            // Display validation errors returned from the backend
            let errorMessages = '';
            for (let field in data.errors) {
                // Join multiple error messages for the same field
                errorMessages += `${field}: ${data.errors[field].join(', ')}\n`;
            }
            document.getElementById('responseMessage').innerText = errorMessages;  // Show errors
        } else {
            document.getElementById('responseMessage').innerText = 'Something went wrong, please try again';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
