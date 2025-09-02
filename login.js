let data = JSON.parse(localStorage.getItem("data")) || [];

function loginForm(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all the fields!");
    return;
  }

  let user = data.find(
    (item) => item.email === email && item.password === password
  );

  if (user) {
    alert("Login successful ");
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "Home.html";
  } else {
    alert("Invalid email or password ");
  }
  
}

document.getElementById("submit-form").addEventListener("submit", loginForm);
