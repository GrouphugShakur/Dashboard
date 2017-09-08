//Timer

var ss = document.getElementById('timer');
console.log(ss);
[].forEach.call(ss, function (s) {
    var currentTimer = 0,
        interval = 0,
        lastUpdateTime = new Date().getTime(),
        start = s.querySelector('button.play-button.paused'),
        stop = s.querySelector('button.play-button'),
        reset = s.querySelector('button.stop-button'),
        mins = s.querySelector('span.minutes'),
        secs = s.querySelector('span.seconds'),
        cents = s.querySelector('span.centiseconds');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);

    function pad(n) {
        return ('00' + n).substr(-2);
    }

    function update() {
        var now = new Date().getTime(),
            dt = now - lastUpdateTime;

        currentTimer += dt;

        var time = new Date(currentTimer);

        mins.innerHTML = pad(time.getMinutes());
        secs.innerHTML = pad(time.getSeconds());
        cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

        lastUpdateTime = now;
    }

    function startTimer() {
        if (!interval) {
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }
    }

    function stopTimer() {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer() {
        stopTimer();

        currentTimer = 0;

        mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
    }
});

//Timer - Play/Pause Button

$(".play-button").click(function () {
    $(this).toggleClass("paused");
    $('#timer').css("border-color", "#FA0085");
  
    $('.counter').css("color", "#FFFFFF");
  });
  
  $(".stop-button").click(function () {
    $('#timer').css("border-color", "#999");
    $('.counter').css("color", "#999");
  });
  
  //Copy to Clipboard
  
  function CopyToClipboard() {
    document.getElementById('test').focus();
    document.getElementById('test').select();
    document.execCommand('Copy');
  }