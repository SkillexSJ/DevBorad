const buttons = document.querySelectorAll(".task-btn");
const currentTaskSpan = document.getElementById("task-komlo");
const totalTaskSpan = document.getElementById("task-barlo");
const logContainer = document.getElementById("container");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    alert("Board Updated Successfully");
    button.disabled = true;

    let current = parseInt(currentTaskSpan.innerText);
    if (current > 0) {
      current--;
      currentTaskSpan.innerText = current;

      let total = parseInt(totalTaskSpan.innerText);
      total++;
      totalTaskSpan.innerText = total;

      let card = button.parentElement.parentElement;
      let titleElem = card.querySelector("h3.title");
      let taskName = titleElem.innerText;

      let timeString = getCurrentTime();

      let htmlString = `
              <div class="bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                You have completed the task "${taskName}" at ${timeString}
            </div>
            `;

      logContainer.innerHTML += htmlString;
    }
  });
}
