let myarray = [];
function submit(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let massage = document.getElementById("massage").value;
  if (!email || !subject || !massage) {
    console.log("please enter all inputs");
    return;
  }
  let contact = {
    email: email,
    subject: subject,
    massage: massage,
  };
  myarray.push(contact);
  console.log(contact);
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("massage").value = "";
  console.log("this is data you have given :", myarray);
}
document.getElementById("form-c").addEventListener("submit", submit);
document.getElementById("form-c")