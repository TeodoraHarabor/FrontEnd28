var fname = document.querySelector("#fname");
var lname = document.querySelector("#lname");
var radio1 = document.querySelector("#radio1");
var radio2 = document.querySelector("#radio2");
var subject = document.querySelector("#subject");
var submit = document.querySelector("#submit");

function checkForBlank() {
  if (
    fname.checkValidity() &&
    lname.checkValidity() &&
    subject.checkValidity() &&
    (radio1.checked || radio2.checked)
  ) {
    console.log("Nume și prenume: " + fname.value);
    if (radio1.checked) {
      console.log("Male");
    } else if (radio2.checked) {
      console.log("Female");
    }
    console.log("Mesaj: " + subject.value);
  } else {
    if (fname.value == "") {
      fname.classList.add("error");
    }
    if (lname.value == "") {
      lname.classList.add("error");
    }
    if (!radio1.checked) {
      radio1.classList.add("error");
    }
    if (radio2.value == "") {
      radio2.classList.add("error");
    }
    if (subject.value == "") {
      subject.classList.add("error");
    }
  }
}

submit.addEventListener("click", checkForBlank());
