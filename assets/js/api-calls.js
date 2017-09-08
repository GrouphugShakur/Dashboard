//API Calls

//GIPHY API

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