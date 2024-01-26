let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  let increment = Math.max(1, Math.floor(endValue / (interval / 50)));

  let counter = setInterval(() => {
    startValue += increment;

    // Update DOM only if necessary, ensuring final value is displayed
    if (startValue >= endValue) {
      valueDisplay.textContent = endValue.toString();
      clearInterval(counter); // Stop the counter when it reaches or exceeds the desired value
    } else {
      valueDisplay.textContent = startValue.toString();
    }
  }, 10);
});
