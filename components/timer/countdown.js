function countDown(seconds) {
  setInterval(function () {
    if (seconds >= 0) {
      document.querySelector(".timer").textContent = seconds;
      seconds--;
    } else document.querySelector(".timer").textContent = "Time's up!";
  }, 1000);
}
