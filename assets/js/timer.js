//Timer
'use strict';
var timer = document.getElementsByClassName('timer');

[].forEach.call(timer, function (s) {
    var currentTimer = 0,
        interval = 0,
        lastUpdateTime = new Date().getTime(),
        start = s.querySelector('button.play-button'),
        reset = s.querySelector('button.stop-button'),
        hrs = s.querySelector('span.hours'),
        mins = s.querySelector('span.minutes'),
        secs = s.querySelector('span.seconds'),
        cents = s.querySelector('span.centiseconds');

    start.addEventListener('click', startTimer);
    reset.addEventListener('click', resetTimer);

    function pad(n) {
        return ('00' + n).substr(-2);
    }

    function update() {
        var now = new Date().getTime(),
            dt = now - lastUpdateTime;

        currentTimer += dt;

        var time = new Date(currentTimer);
                
        hrs.innerHTML = pad(time.getHours() - 1);
        mins.innerHTML = pad(time.getMinutes());
        secs.innerHTML = pad(time.getSeconds());
        cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

        lastUpdateTime = now;
    }

    function startTimer() {
        if (!interval) {
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }else{
            clearInterval(interval);
            interval = 0;
        }
    }
    
    function resetTimer() {
        clearInterval(interval);
        currentTimer = 0;
        hrs.innerHTML = mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
    }
});

//Timer - Play/Pause Button

$(".play-button").click(function () {
    $(this).toggleClass("paused");
    $('.timer').css("border-color", "#FA0085");
    $('.counter').css("color", "#FFFFFF");
    $(".stop-button").css("background", "#FA0085")
});
  
$(".stop-button").click(function () {
    $('.timer').css("border-color", "#999");
    $('.counter').css("color", "#999");
    $(".stop-button").css("background", "rgb(101,101,101)")
});
  
  //Kopieren in Zwischenablage

function CopyToClipboard() {
    document.getElementById('project-name').focus();
    document.getElementById('project-name').select();
    document.execCommand('Copy');
}

// Ergebnis-Liste erstellen per Klick

(function () {
	function init() {
		document.getElementById('clipboard')
			.addEventListener('click', eingabe);
	}
	function eingabe() {
        var result = document.getElementById("project-name").value;
        if (result != ""){
		document.getElementById('timer-result').innerHTML = result;
        }else{
        document.getElementById('timer-result').innerHTML = "Du sollest schon einen Projektnamen eingeben.";
        }
	}
	document.addEventListener('DOMContentLoaded', init);
}());