let emailInput = document.querySelector("#exampleInputEmail1");
let passwordInput = document.querySelector("#exampleInputPassword1");

let dataFromLocal = localStorage.getItem("db");
let datas;

if (dataFromLocal) {
  datas = JSON.parse(dataFromLocal);
} else {
  datas = [];
}

function subbut(e) {
  if (emailInput.value == "" || passwordInput.value == "") {
    alert("werey, complete your details");
  } else {
    datas.push({
      email: emailInput.value,
      password: passwordInput.value,
    });
    localStorage.setItem("db", JSON.stringify(datas));
    alert("signed up");
  }
}

/* login section */

function lookup(mail, mailcheck) {
  mailcheck = document.querySelector("#exampleInputEmail1").value;
  passcheck = document.querySelector("#exampleInputPassword1").value;
  if (passcheck == "" || mailcheck == "") {
    alert("fill in the empty boxes");
  } else {
    if (
      (mail = datas.find(
        (o) => o.email === document.querySelector("#exampleInputEmail1").value
      )) && mail.password === document.querySelector("#exampleInputPassword1").value
    ) {
        alert("Logged in");
        window.location.href = "https://earnest-torte-b0a7c9.netlify.app"
    } else {
      alert("Email or password wrong");
      console.log(mail.password);
    }
  }
}
