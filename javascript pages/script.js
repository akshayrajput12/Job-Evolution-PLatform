let profile = document.getElementById('profile-img');

function showSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.style.visibility = 'visible';
  submenu.style.transition = '20s';
}

function hideSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.style.visibility = 'hidden';
  submenu.style.transition = '20s';
}

profile.addEventListener('mouseover', showSubmenu);
profile.addEventListener('mouseout', hideSubmenu);

function resetLoginForm() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation (you may want to implement more robust validation)
  if (username == 'akshayrajput2616@gmail.com' && password =='Cbum@1234') {
    alert('Login successful!');
    window.location.href = '/pages/home.html';
    // Redirect to another page or perform additional actions on successful login
  } else {
    alert('Invalid username or password. Please try again.');
    resetLoginForm();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Stopwatch
  let stopwatchRunning = false;
  let stopwatchInterval;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  const dayElement = document.querySelector('.day');
  const hourElement = document.querySelector('.hour');
  const minuteElement = document.querySelector('.minute');
  const secElement = document.querySelector('.sec');
  const msecElement = document.querySelector('.msec');

  // Lunch break checkbox element
  const lunchBreakCheckbox = document.getElementById('lunch-time');

  // Function to update the stopwatch display
  function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
          if (hours === 24) {
            hours = 0;
            days++;
          }
        }
      }
    }

    // Format the time
    const dayString = (days < 10 ? '0 :' : ' : ') + days;
    const hourString = (hours < 10 ? '0 : ' : ' : ') + hours;
    const minuteString = (minutes < 10 ? '0 : ' : ' : ') + minutes;
    const secString = (seconds < 10 ? '0 : ' : ' : ') + seconds;
    const msecString = (milliseconds < 10 ? '0 : ' : ' : ') + milliseconds;

    // Update the stopwatch display
    dayElement.textContent = dayString;
    hourElement.textContent = hourString;
    minuteElement.textContent = minuteString;
    secElement.textContent = secString;
    msecElement.textContent = msecString;
  }

  // Function to start the stopwatch
  function startStopwatch() {
    if (!stopwatchRunning) {
      stopwatchInterval = setInterval(updateStopwatch, 10);
      stopwatchRunning = true;
    }
  }

  // Function to stop the stopwatch
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
  }

  // Start the stopwatch when the page loads
  startStopwatch();

  // Toggle the stopwatch on lunch break checkbox change
  lunchBreakCheckbox.addEventListener('change', function () {
    if (this.checked) {
      // Lunch break checkbox is checked, stop the stopwatch
      stopStopwatch();
    } else {
      // Lunch break checkbox is unchecked, start the stopwatch
      startStopwatch();
    }
  });

  fullDayCheckbox.addEventListener('change', function () {
    if (this.checked) {
      stopStopwatch();
    } else {
      startStopwatch();
    }
  });
  ServiceCheckbox.addEventListener('change', function () {
    if (this.checked) {
      stopStopwatch();
    } else {
      startStopwatch();
    }
  });

});
