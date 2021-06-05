//variables to store time in integer
var hours=0,minutes=0,seconds=0,miliseconds=0;

//variables to store time in string
var HH,MM,SS,mm;

//
var timer = document.getElementsByClassName("timer")[0];
var interval;
timer.innerHTML = "00 : 00 : 00 : 00";


function start() {

	interval = setInterval(function() {
		miliseconds++;

		if(miliseconds>99) {
			seconds++;	miliseconds=0;
		}

		if(seconds>59) {
			minutes++;	seconds=0;
		}

		if(minutes>59) {
			hours++;	minutes=0;
		}

		if(seconds 	   < 10)	SS = "0" + seconds; 	else SS = seconds;

		if(minutes	   < 10)	MM = "0" + minutes;	 	else MM = minutes;
		
		if(hours	   < 10)	HH = "0" + hours;		else HH = hours;
		
		if(miliseconds < 10)	mm = "0" + miliseconds; else mm = miliseconds;

		//updating timer every (1/100)th second
		timer.innerHTML = HH + " : " + MM + " : " + SS + " : " + mm;

	},10)
}


function stop() {
	flag=0;
	clearInterval(interval);
}


function reset() {
	stop();
	hours=minutes=seconds=miliseconds=0;
	timer.innerHTML = "00 : 00 : 00 : 00";
}


						/*  ~~~~~~~~~~~~~~~~~~~~~~
							Events to be performed 
							~~~~~~~~~~~~~~~~~~~~~~	*/

//flag so to ensure only 1 interval running.
var flag = 0;

//triggred by start button
document.getElementsByClassName("start")[0].addEventListener("click",function() {
	if(flag==0) {
		flag=1;
		start();
	}
})

//triggred by stop button
document.getElementsByClassName("stop")[0].addEventListener("click",function() {
	stop();
})

//triggred by reset button
document.getElementsByClassName("reset")[0].addEventListener("click",function() {
	reset();
})