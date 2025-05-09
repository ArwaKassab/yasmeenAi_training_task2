const token = localStorage.getItem("jwt_token");

if (!token) {
  window.location.href = "/login.html";
}

fetch("http://127.0.0.1:8000/api/profile/", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + token
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error("Unauthorized");
  }
  return response.json();
})
.then(data => {
  document.getElementById("username").innerText = data.username;
  document.getElementById("email").innerText = data.email;
})
.catch(error => {
  console.error(error);
  window.location.href = "/login.html";
});
