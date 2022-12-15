const display = document.getElementById("clock");
const audio = new Audio("./bip.mp3");



    audio.loop = true;

let alarmTime = null;
let alarmTimeOut = null;

let updateTime = () => {
  const date = new Date();

  const hour = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  display.innerText = `${hour} : ${minutes} : ${seconds}`;
};

let formatTime = (time) => {
  if (time < 10) {
    return "0" + time;
  }
  return time;
};

let setAlarmTime = (value) => {
  alarmTime = value;
  console.log(alarmTime);
};

let setAlarm = () => {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeOut = setTimeout(() => {
        audio.play();
      }, timeout);

      alert("Alarm set");
    }
  }
};

let clearAlarm = () => {
  audio.pause();
  if (alarmTimeOut) {
    clearTimeout(alarmTimeOut);
    alert("Alarm cleared");
  }
};

setInterval(updateTime, 1000);
