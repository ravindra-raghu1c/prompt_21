const countdown = () => {
  const launchDate = new Date("December 31, 2024 23:59:59").getTime();
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (gap <= 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "<h2>We're Live Now!</h2>";
  }
};

const timer = setInterval(countdown, 1000);
countdown();
