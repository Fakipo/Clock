
class Clock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
	const d = parts.now1;
    
	this.digitalClock(parts);
	this.analogClock(d);
}
	
	digitalClock(parts){
		const minuteFormatted = parts.minute.toString().padStart(2, "0");
		const hoursFormatted = parts.hour.toString().padStart(2, "0");
		const timeFormatted = `${hoursFormatted}:${minuteFormatted}`;
		const amPm = parts.isAm ? "AM" : "PM";

		this.element.querySelector("#Time").textContent = timeFormatted;
		this.element.querySelector("#AMPM").textContent = amPm;

	}

	analogClock(d){
		let hr = d.getHours();
		let min = d.getMinutes();
		let sec = d.getSeconds();
		let hr_rotation = (30 * hr) + (min / 2); //converting current time
		let min_rotation = 6 * min;
		let sec_rotation = 6 * sec;
  
		hour.style.transform = `rotate(${hr_rotation}deg)`;
		minute.style.transform = `rotate(${min_rotation}deg)`;
		second.style.transform = `rotate(${sec_rotation}deg)`;
	}

  getTimeParts() {
    const now = new Date();
    return {
	  now1: now,
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12
    };
  }
}
const clockElement = document.querySelector(".clock");
const clockObject = new Clock(clockElement);
clockObject.start();

//This is where stopwatch starts from

var started = false;
var isReset = false;
var crar = null;
function stopWatch(){
	
	if(started){
		alert("Stopwatch already running, please stop that first.");
		return;
	}
	started = true;
	let milliseconds = 0;
	let seconds = 0;
	let minutes = 0;
	let hours = 0;

	crar = setInterval(() => {
		insideFunc()
	},100);
	
	function insideFunc(){
		milliseconds += 100;
		if(milliseconds >= 1000){
			milliseconds = 0;
			seconds++;
		}
		if(seconds >= 60){
			seconds = 0;
			minutes++
		}
		if(minutes >= 60){
			minutes = 0;
			hours++;
		}
		const milliSecondsFormatted = milliseconds.toString().padStart(3,"0");
		const secondsFormatted = seconds.toString().padStart(2,"0");
		const minuteFormatted = minutes.toString().padStart(2, "0");
		const hoursFormatted = hours.toString().padStart(2, "0");
		const timeFormatted = `${hoursFormatted}:${minuteFormatted}:${secondsFormatted}:${milliSecondsFormatted}`;
		document.getElementById("stw").innerHTML = timeFormatted;
	}
}

function stopClock(){
	if(!started){
		alert("Already Stopped");
	}
	started = false;
	clearInterval(crar);
}

function resetClock(){
	if(isReset){
		alert("Already Reset");
	}
	isReset = true;
	started = false;
	clearInterval(crar);
	document.getElementById("stw").innerHTML = "00:00:00:000";
}

/*
var intervalTimer = null;
function startTimer1(){
	var hours1 = parseInt(document.getElementById("hoursTimer").value);
	var minutes1 = parseInt(document.getElementById("minutesTimer").value);
	var seconds1 = parseInt(document.getElementById("secondsTimer").value);
	startTimer(hours1,minutes1,seconds1);
}
function startTimer(hours1, minutes1, seconds1){	
	//validation
	if(document.getElementById("hoursTimer").value == "")	hours1 = 0;
	if(document.getElementById("minutesTimer").value == "")	minutes1 = 0;
	if(document.getElementById("secondsTimer").value == "") seconds1 = 0;
	
	if(hours1 > 24 || hours1 <0){
		alert("Wrong Input for hours");
		return;
	}	
	if(minutes1 > 59 || minutes1 < 0){
		alert("Wrong Input for Minutes");
		return;
	}	
	if(seconds1 > 59 || seconds1 < 0){
		alert("Wrong Input for Seconds");
		return;
	}

	intervalTimer = setInterval(()=> {
		timer();
	} , 1000);
	
	function timer(){
		if(seconds1 <= 0 && minutes1 <=0 && hours1 <=0){
			alert("Timed out");
			clearInterval(intervalTimer);
			return;
		}
		seconds1--;
		if(seconds1 < 0){
			minutes1--;
			seconds1 = 59;
		}
		if(minutes1 < 0){
			hours1--;
			minutes1 = 59;
		}
		const secondsFormatted = seconds1.toString().padStart(2,"0");
		const minuteFormatted = minutes1.toString().padStart(2, "0");
		const hoursFormatted = hours1.toString().padStart(2, "0");
		const timeFormatted = `${hoursFormatted}:${minuteFormatted}:${secondsFormatted}`;
		document.getElementById("stew").innerHTML = timeFormatted;
	}
}

function stopTimer(){
	alert("stopped");
	clearInterval(intervalTimer);
	document.getElementById("stew").innerHTML = "00:00:00";
}
*/
