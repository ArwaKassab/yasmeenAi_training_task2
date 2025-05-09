document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.access) {
        localStorage.setItem("jwt_token", data.access);
        window.location.href = "/profile.html";
      } else {
        alert("Invalid login credentials");
      }
    });
  });
  