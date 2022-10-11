function check(answer, divId) {
  var parentDiv = document.getElementById(divId);
  if (questions[currentQuestion].correct_answer == answer) {
    parentDiv.style.color = "green";
  } else {
    parentDiv.style.color = "red";
  }
  // additional codes to disable the other options.
  const options = parentDiv.parentNode.querySelectorAll("input[type=radio]");
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
}
