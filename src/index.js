const refs = {
  dayEl: document.querySelector('.date-day'),
  dateEl: document.querySelector('.date'),
  monthEl: document.querySelector('.date-month'),
  yearEl: document.querySelector('.date-year'),
  digitalClockEl: document.querySelector('.digital-clock'),
  arrowSecondsEl: document.querySelector('.clock-seconds__arrow'),
  arrowMinutesEl: document.querySelector('.clock-minutes__arrow'),
  arrowHoursEl: document.querySelector('.clock-hours__arrow'),
};

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const namesOfDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'Пʼятниця',
  'Субота',
];

setInterval(() => {
  const currentTime = new Date();
  const currentDay = namesOfDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  const formatTime = `${currentHour.toString().padStart(2, 0)} : ${currentMinute
    .toString()
    .padStart(2, 0)} : ${currentSecond.toString().padStart(2, 0)}`;

  const changeSeconds = (360 / 60) * currentSecond;
  const changeMinutes = (360 / 60) * currentMinute;
  const changeHours =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinute;

  refs.dayEl.textContent = currentDay;
  refs.dateEl.textContent = currentDate;
  refs.monthEl.textContent = currentMonth;
  refs.yearEl.textContent = currentYear;
  refs.digitalClockEl.textContent = formatTime;
  refs.arrowSecondsEl.style.transform = `rotate(${changeSeconds}deg)`;
  refs.arrowMinutesEl.style.transform = `rotate(${changeMinutes}deg)`;
  refs.arrowHoursEl.style.transform = `rotate(${changeHours}deg)`;
}, 1000);
