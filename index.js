document
  .querySelectorAll(".in")
  .forEach((element) => element.addEventListener("input", (e) => updateOut(e)));

function calculate(op, num1, num2) {
  num1 = +num1;
  num2 = +num2;
  switch (op) {
    case "addition":
      return num1 + num2;
    case "subtraction":
      return num1 - num2;
    case "multiplication":
      return num1 * num2;
    case "division":
      return num1 / num2;
    case "modulo":
      return num1 % num2;
    default:
      return -Infinity;
  }
}
function updateOut(e) {
  e.target.parentElement.lastElementChild.value = calculate(
    e.target.parentElement.className,
    e.target.parentElement.firstElementChild.value,
    e.target.parentElement.firstElementChild.nextElementSibling.value
  );
}
