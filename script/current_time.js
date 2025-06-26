function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return hours + ":" + minutes + " " + ampm;
}
