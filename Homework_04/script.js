var fname = document.querySelector("#fname");
var lname = document.querySelector("#lname");
var radio1 = document.querySelector("#radio1");
var radio2 = document.querySelector("#radio2");
var subject = document.querySelector("#subject");
var submit = document.querySelector("#submit");
var message = document.querySelector("#message");

submit.addEventListener("click", function checkForBlank() {
  //if it is ok
  if (
    fname.checkValidity() &&
    lname.checkValidity() &&
    subject.checkValidity() &&
    (radio1.checked || radio2.checked)
  ) {
    console.log("Prenume: " + fname.value);
    console.log("Nume: " + lname.value);
    if (radio1.checked) {
      console.log("Male");
    } else if (radio2.checked) {
      console.log("Female");
    }
    console.log("Mesaj: " + subject.value);

    message.classList.add("green");
    message.innerText =
      "The information has been sent. Thank you, " + fname.value + "!";
    setTimeout(() => message.remove(), 5000);

    //if it is not ok
  } else {
    if (fname.value == "") {
      fname.classList.add("error");
    }
    fname.addEventListener("keydown", function () {
      fname.classList.remove("error");
    });
    if (lname.value == "") {
      lname.classList.add("error");
    }
    lname.addEventListener("keydown", function () {
      lname.classList.remove("error");
    });

    if (!radio1.checked && !radio2.checked) {
      console.log("test");
      radio1.closest("div").classList.add("error");
      radio2.closest("div").classList.add("error");
    }
    radio1.addEventListener("click", function () {
      radio1.closest("div").classList.remove("error");
    });
    radio2.addEventListener("click", function () {
      radio2.closest("div").classList.remove("error");
    });
    if (subject.value == "") {
      subject.classList.add("error");
    }
    subject.addEventListener("keydown", function () {
      subject.classList.remove("error");
    });
  }
});
