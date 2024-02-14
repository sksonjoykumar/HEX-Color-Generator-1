// Select all html id
const mainRoot = document.getElementById("root-container");
const inputBox = document.getElementById("input-box");
const myButton = document.getElementById("myBtn");

// window onload function
window.onload = () => {
  mainFunction();
};

// Created main function
function mainFunction() {
  myButton.addEventListener("click", function () {
    const bgColor = generatedHexColor();
    mainRoot.style.backgroundColor = bgColor;
    inputBox.value = bgColor;
  });
}

// Generated HEX Color
function generatedHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
