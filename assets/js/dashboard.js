//Timer

// var zeit = 0;
// var running = 0;

// function startPause(){
//   if (running === 0 ){
//     running = 1;
//     increment();
//   }
//   else{
//     running=0;
//   }
// }

// function stop(){
//   running = 0;
//   document.getElementsByClassName('counter').innerHTML = "STOP";
// }

// function increment(){
//   if (running == 1){
//     setTimeout(function(){
//       zeit++;
//       var hours = Math.floor(zeit/10/60/60);
//       var mins = Math.floor(zeit/10/60);
//       var secs = Math.floor(zeit/10%60);
//       var milli = zeit%10; 
//       if(mins < 10){
//         mins = "0" + mins;
//       }
//       if(secs < 10){
//         secs = "0" + secs;
//       }
//       if(milli < 10){
//         milli = "0" + milli;
//       }
//       document.getElementsByClassName('counter').innerHTML = hours + ":" + mins + ":" + secs + ":" + milli;
//     })
//   }
// }

//Weather APP

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Saarbrucken';
var apiKey = '&APPID=b53044e7fafcf8c5c07d2cfd45a734d1';
var units = '&units=metric';
var url = api + city + apiKey + units;
var wd;

function render(wd) {
  var currentLocation = wd.name;
  var currentWeather = wd.weather[0].description;
  var currentTemp = Math.round(wd.main.temp);
  var icon = wd.weather[0].icon;
  var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";

  $('#currentLocation').html(currentLocation);
  $('#currentTemp').html(currentTemp + '°');
  $('#currentWeather').html(currentWeather);
  $('#currentTemp').append('<i class="ms-Icon weather-icon-' + icon + '"></i>');

}

// $(function () {
//   var loc;
//   $.getJSON('http://ipinfo.io', function (d) {
//     console.log("Zuordnung der Daten...")
//     loc = d.loc.split(",");
//     console.log(loc);
//     $.getJSON(url, function (apiData) {
//       wd = apiData;
//       render(apiData);
//     })
//   })
// })

// Uhrzeit
function time() {

  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var month = date.getMonth();
  var day = date.getDate();
  var months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  jQuery('.footer .time').html(hours + ':' + minutes);
  jQuery('.footer .date').html(months[month] + ' ' + day);
}
time();



// Super Search

// Giphy Search



// 'use strict';

// var PUBLIC_KEY = 'dc6zaTOxFJmzC';
// var BASE_URL = 'http://api.giphy.com/v1/gifs/';
// var ENDPOINT = 'search';
// var LIMIT = 1;

// var $queryInput = $('.query');
// var $resultWrapper = $('.result');
// var $loader = $('.loader');
// var $inputWrapper = $('.input-wrapper');
// var $clear = $('.clear');
// var $button = $('.random');
// var currentTimeout = undefined;

// var query = {
//   text: null,
//   request: function request() {
//     return '' + BASE_URL + ENDPOINT + '?q=' + this.text + '&limit=' + LIMIT + '&api_key=' + PUBLIC_KEY;
//   },
//   fetch: function fetch(callback) {
//     $.getJSON(this.request()).success(function (data) {
//       var results = data.data;

//       if (results.length) {
//         var url = results[0].images.downsized.url;
//         console.log(results);
//         callback(url);
//       } else {
//         callback('');
//       }
//     }).fail(function (error) {
//       console.log(error);
//     });
//   }
// };

// function buildImg() {
//   var src = arguments.length <= 0 || arguments[0] === undefined ? '//giphy.com/embed/xv3WUrBxWkUPC' : arguments[0];
//   var classes = arguments.length <= 1 || arguments[1] === undefined ? 'gif hidden' : arguments[1];

//   return '<img src="' + src + '" class="' + classes + '" alt="gif" />';
// }

// $clear.on('click', function (e) {
//   $queryInput.val('');
//   $inputWrapper.removeClass('active').addClass('empty');
//   $('.gif').addClass('hidden');
//   $loader.removeClass('done');
//   $button.removeClass('active');
// });

// $button.on('click', function (e) {
//   query.offset = Math.floor(Math.random() * 25);

//   query.fetch(function (url) {
//     if (url.length) {
//       $resultWrapper.html(buildImg(url));

//       $button.addClass('active');
//     } else {
//       $resultWrapper.html('<p class="no-results hidden">No Results found for <strong>' + query.text + '</strong></p>');

//       $button.removeClass('active');
//     }

//     $loader.addClass('done');
//     currentTimeout = setTimeout(function () {
//       $('.hidden').toggleClass('hidden');
//     }, 1000);
//   });
// });

// $queryInput.on('keyup', function (e) {
//   var key = e.which || e.keyCode;
//   query.text = $queryInput.val();
//   query.offset = Math.floor(Math.random() * 25);

//   if (currentTimeout) {
//     clearTimeout(currentTimeout);
//     $loader.removeClass('done');
//   }

//   currentTimeout = setTimeout(function () {
//     currentTimeout = null;
//     $('.gif').addClass('hidden');

//     if (query.text && query.text.length) {
//       $inputWrapper.addClass('active').removeClass('empty');

//       query.fetch(function (url) {
//         if (url.length) {
//           $resultWrapper.html(buildImg(url));

//           $button.addClass('active');
//         } else {
//           $resultWrapper.html('<p class="no-results hidden">No Results found for <strong>' + query.text + '</strong></p>');

//           $button.removeClass('active');
//         }

//         $loader.addClass('done');
//         currentTimeout = setTimeout(function () {
//           $('.hidden').toggleClass('hidden');
//         }, 1000);
//       });
//     } else {
//       $inputWrapper.removeClass('active').addClass('empty');
//       $button.removeClass('active');
//     }
//   }, 1000);
// });

const PUBLIC_KEY = 'dc6zaTOxFJmzC';
const BASE_URL = 'http://api.giphy.com/v1/gifs/';
const ENDPOINT = 'search';
const LIMIT = 1;
const RATING = 'pg';

let $queryInput = $('.query');
let $resultWrapper = $('.result');
let $loader = $('.loader');
let $inputWrapper = $('.input-wrapper');
let $clear = $('.clear');
let $button = $('.random');
let currentTimeout;

let query = {
  text: null,
  offset: 0,
  request() {
    return `${BASE_URL}${ENDPOINT}?q=${this.text}&limit=${LIMIT}&rating=${RATING}&offset=${this.offset}&api_key=${PUBLIC_KEY}`;
  },
  fetch(callback) {
    $.getJSON(this.request())
      .success(data => {
        let results = data.data;

        if (results.length) {
          let url = results[0].images.downsized.url;
          console.log(results);
          callback(url);
        } else {
          callback('');
        }
      })
      .fail(error => {
        console.log(error);
      });
  }
}

function buildImg(src = 'http://giphy.com/embed/xv3WUrBxWkUPC', classes = 'gif hidden') {
  return `<a href="${src}" download="custom-filename.gif"><img src="${src}" class="${classes}" alt="gif" /></a>`;
}

$clear.on('click', e => {
  $queryInput.val('');
  $inputWrapper.removeClass('active').addClass('empty');
  $('.gif').addClass('hidden');
  $loader.removeClass('done');
  $button.removeClass('active');
});

$button.on('click', e => {
  query.offset = Math.floor(Math.random() * 25);

  query.fetch(url => {
    if (url.length) {
      $resultWrapper.html(buildImg(url));

      $button.addClass('active');
    } else {
      $resultWrapper.html(`<p class="no-results hidden">Keine Ergebnisse zu <strong>${query.text}</strong> gefunden</p>`);

      $button.removeClass('active');
    }

    $loader.addClass('done');
    currentTimeout = setTimeout(() => {
      $('.hidden').toggleClass('hidden');
    }, 1000);
  });
});

$queryInput.on('keyup', e => {
  let key = e.which || e.keyCode;
  query.text = $queryInput.val();
  query.offset = Math.floor(Math.random() * 25);

  if (currentTimeout) {
    clearTimeout(currentTimeout);
    $loader.removeClass('done');
  }

  currentTimeout = setTimeout(() => {
    currentTimeout = null;
    $('.gif').addClass('hidden');

    if (query.text && query.text.length) {
      $inputWrapper.addClass('active').removeClass('empty');

      query.fetch(url => {
        if (url.length) {
          $resultWrapper.html(buildImg(url));

          $button.addClass('active');
        } else {
          $resultWrapper.html(`<p class="no-results hidden">Keine Ergebnisse zu <strong>${query.text}</strong> gefunden</p>`);

          $button.removeClass('active');
        }

        $loader.addClass('done');
        currentTimeout = setTimeout(() => {
          $('.hidden').toggleClass('hidden');
        }, 1000);
      });
    } else {
      $inputWrapper.removeClass('active').addClass('empty');
      $button.removeClass('active');
    }
  }, 1000);
});


$(document).ready(function () {
  formButtonListener();
});

var formButtonListener = function () {
  $("#gif_search").on("submit", function (event) {
    event.preventDefault();

    var $form = $(this);
    var url = $form.attr("action");
    var method = $form.attr("method");

    $.ajax({
      url: url,
      method: method,
    }).done(function (response) {
      $("#gif-show").append(response);
    }).fail(function () {
      console.log(error)
    })
  })
};


// //Timer
// //Play/Pause

// $(".play-button").click(function () {
//   $(this).toggleClass("paused");
//   $('#timer').css("border-color", "#FA0085");
  
//   $('.counter').css("color", "#FFFFFF");
// });

// $(".stop-button").click(function () {
//   $('#timer').css("border-color", "#999");
//   $('.counter').css("color", "#999");
// });

//Timer


var ss = document.getElementById('timer');

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