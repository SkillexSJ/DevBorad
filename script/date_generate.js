function dateUpdate() {
  const weekend = document.getElementById("weekday");
  const dateTime = document.getElementById("fullDate");

  const now = new Date();

  const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  weekend.innerText = weekNames[now.getDay()];

  const day = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  dateTime.innerText = `${day} ${month} ${year}`;
}

dateUpdate();
