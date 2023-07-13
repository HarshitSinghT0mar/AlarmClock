
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let dropHr = document.querySelector('#drop-hr');
let dropMin = document.querySelector('#drop-min');
let setBtn = document.getElementById('set-btn');
let para = document.querySelector('.btn-container')
let sound = document.getElementById('ring')


//Clock
setInterval(() => {
  let a = new Date();
  sec.innerHTML = a.getSeconds() > 9 ? a.getSeconds() : '0' + a.getSeconds();
  min.innerHTML = a.getMinutes() > 9 ? a.getMinutes() + ":" : '0' + a.getMinutes() + ':';
  hr.innerHTML = a.getHours() > 9 ? a.getHours() + ":" : '0' + a.getHours() + ':';

}, 500)


for (i = 0; i < 25; i++) {
  option1 = document.createElement('option');
  if (i >= 10) { option1.text = i; }
  else {
    option1.text = '0' + i
  }

  dropHr.appendChild(option1);
}

for (i = 0; i < 60; i++) {
  option2 = document.createElement('option');
  if (i >= 10) { option2.text = i; }
  else {
    option2.text = '0' + i
  }


  dropMin.appendChild(option2);

}

//function
function ringTheAlarm() {
  
   setBtn.style.display = 'none';
  
  
  // creating clear button
  const clr = document.createElement('button');
  clr.classList.add('alarm-btn', 'clr-btn');
  clr.innerHTML = 'clear alarm';
  
  //note 
   const p1 = document.createElement('p')
  p1.textContent = `The alarm is set at ${alarmHour}: ${alarmMinute}`
  p1.classList.add('note')
  
  
 
  // adding note and clear button inside btn-container
 
 para.appendChild(p1);
  para.appendChild(clr);
  

  let note = document.querySelector('.note');
  let clrbtn = document.querySelector('.clr-btn');
  
  let alarmTimeout = setTimeout(() => {
    sound.play();
     setBtn.style.display = 'block';
     clrbtn.remove();
    note.remove();
   
  }, timeDiff)
  
  //clear alarm
  clrbtn.addEventListener('click', () => {
    clrbtn.remove();
    note.remove();
    setBtn.style.display = 'block';
    clearTimeout(alarmTimeout);
  })

}

//events


setBtn.addEventListener('click', () => {
 alarmMinute =dropMin.value;  //it gives the vakue you have set inside dropdown
 alarmHour = dropHr.value;

  let time = new Date();

  const alarmTime = new Date(time.getFullYear(), time.getMonth(), time.getDate(), alarmHour, alarmMinute)

  timeDiff = (alarmTime - time)
 
  if (timeDiff > 0) {
    ringTheAlarm();
  }

})


