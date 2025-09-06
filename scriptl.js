function toggleForm() {
    document.getElementById('loginContainer').style.display =
        document.getElementById('loginContainer').style.display === 'none' ? 'block' : 'none';
    document.getElementById('signupContainer').style.display =
        document.getElementById('signupContainer').style.display === 'none' ? 'block' : 'none';
}

// Handle Signup
document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) toggleForm();  // Switch to login form on success
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.name);
        alert('Login successful!');
        window.location.href = 'index1.html';
    } else {
        alert(data.message);
    }
});
