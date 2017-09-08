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

$(function () {
  var loc;
  $.getJSON('http://ipinfo.io', function (d) {
    console.log("Zuordnung der Daten...")
    loc = d.loc.split(",");
    console.log(loc);
    $.getJSON(url, function (apiData) {
      wd = apiData;
      render(apiData);
    });
  });
});