const days= document.getElementById('days')
const hours= document.getElementById('hours')
const minutes= document.getElementById('minutes')
const seconds= document.getElementById('seconds')

const Months =[
 'January',
 'February', 
 'March',
  'April',
  'May',
  'June', 
  'July',
'August',
'September',
'October',
'November',
'December'
];

const weekDays =[
  'Sunday', 
     'Monday', 
    'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday',
     
];

function updateTime(){ 

    const currentDate = new Date();
   const currentMonth = currentDate.getMonth();
   const currentYear = currentDate.getFullYear();
let Month = Months[currentMonth];
const daysofthemonth = currentDate.getDate();
//console.log(month);

const weekDay = weekDays[currentDate.getDay()];

const futureDate = new Date(currentYear,currentMonth,daysofthemonth  + 10,11,30,0);

const time = futureDate - currentDate;


console.log(time);
document.getElementById('Giveaway').textContent = `${Month} is ${weekDay}`

const DaysA = Math.floor(time/(24 * 60 * 60 * 1000));
const HoursA = Math.floor((time % (24 * 60 * 60 * 1000)/(60 * 60 * 1000)));
const MinutesA = Math.floor((time % ( 60 * 60 * 1000))/(60 * 1000));
const SecondsA = Math.floor(time % (60 * 1000)/(1000));
console.log(DaysA);


days.textContent = DaysA
hours.textContent = HoursA
minutes.textContent = MinutesA
seconds.textContent = SecondsA

}

  interval= setInterval(updateTime,1000);  
   updateTime(Countdown); 
