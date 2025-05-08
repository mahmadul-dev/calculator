let display = document.querySelector("#display");
function appendToDisplay(e) {
  display.value += e;
}

function clearDisplay() {
  display.value = "";
}

function deleteDisplay() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    if (display.value === "") {
      display.value = "Type something..";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}
