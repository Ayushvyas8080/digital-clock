function updateClock() {
  const date = new Date();

  let hours = date.getHours();
  const meridian = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);

  
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);

  const timeText = `${hours}:${minutes}:${seconds} ${meridian}`;

  const clock = document.getElementById('clock');
  clock.innerText = timeText;
}

updateClock();

setInterval(updateClock, 1000);
