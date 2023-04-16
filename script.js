function updateDateTime() {
    const currentDate = new Date();
    const dateTime = currentDate.toLocaleString();
    document.getElementById("current-date-time").innerHTML = dateTime;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);
  