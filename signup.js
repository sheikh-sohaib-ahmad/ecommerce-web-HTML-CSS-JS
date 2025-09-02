let data = JSON.parse(localStorage.getItem("data")) || [];
function submitform(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (!email || !password) {
    alert("Please filled all the inputs...");
    return;
  }
  let newdata = {
    email: email,
    password: password,
  };
  data.push(newdata);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  window.location.href = "login.html";
}
document.getElementById("submit-form").addEventListener("submit", submitform);
