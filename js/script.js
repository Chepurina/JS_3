'use strict'
var Timer = {
    body: document.body,
    wrapper: '',
       
    proceedTimerID: '',
    startTimerID: '',
    currTime: 0,
    startTime: 0,
    prevTime: 0,
    output:'',

    Proceed: function () {
        Timer.proceedTimerID = setInterval(function () {
            var time = Timer.prevTime + Timer.currTime - Timer.startTime;
            var msec = time % 1000;
            time = (time / 1000) >> 0;
            var sec = time % 60;
            time = (time / 60) >> 0;
            var min = time % 60;
            time = (time / 60) >> 0;
            var hour = time % 24;
            this.output = document.getElementById('timerclock__display');
            this.output.innerHTML = '' +(((hour / 10) >> 0)) + (hour % 10) + ':' +
                ((min / 10) >> 0) + (min % 10) + ':' +
                ((sec / 10) >> 0) + (sec % 10) + '.' +
                ((msec / 100) >> 0) + ((msec % 100 / 10) >> 0) + '' + (msec % 10);
        }, 13);
    },

    StartTimer: function () {
        var time = new Date();
        Timer.startTime = time.getTime();
        Timer.currTime = Timer.startTime;
        Timer.startTimerID = setInterval(function () {
            var time = new Date();
            Timer.currTime = time.getTime();
        }, 7);
		
		var stopkey = document.getElementById('timer__stop');
        var startkey = document.getElementById('timer__start');
        startkey.classList.add('invisible_key');
        stopkey.classList.remove('invisible_key');
    },

    StopTimer: function () {
        clearInterval(Timer.startTimerID);
        var time = new Date();
        Timer.currTime = time.getTime();
        Timer.prevTime = Timer.prevTime + Timer.currTime - Timer.startTime;
        Timer.currTime = 0;
        Timer.startTime = 0;
		
		var stopkey = document.getElementById('timer__stop');
        var startkey = document.getElementById('timer__start');
        stopkey.classList.add('invisible_key');
        startkey.classList.remove('invisible_key');
    },


    ResetTimer: function () {
        clearInterval(Timer.startTimerID);
        Timer.prevTime = 0;
        Timer.currTime = 0;
        Timer.startTime = 0;
		
		var stopkey = document.getElementById('timer__stop');
        var startkey = document.getElementById('timer__start');
        stopkey.classList.add('invisible_key');
        startkey.classList.remove('invisible_key');
    },
	
	TimerOn: function(){
		this.StartTimer();
		this.Proceed();
	}
};

