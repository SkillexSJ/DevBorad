const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const getContainer = document.getElementById("container");

clearHistoryBtn.addEventListener("click", function () {
  getContainer.innerHTML = "";
});
