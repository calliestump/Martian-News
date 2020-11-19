import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mars from './mars.js';

$('#weather').click(function () {
  event.preventDefault();
  let promise = Mars.getWeather();
  let promise2 = Mars.getPicture();

  promise.then(function (response) {
    const body = JSON.parse(response);
    $('.marsWeather').text(`<p>The high temp is</p> ${body[698].AT.mx}C and the low temp is ${body[698].AT.mn}C and the average windspeed is ${body[698].HWS.av} kph`);
  });

  promise2.then(function(response) {
    const body = JSON.parse(response);
    $('.astronomyOutput').html(`This photo was taken by ${body.copyright} about this image ${body.explanation} <a href=${body.url}>click here for image</a>`);
  });
});