import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mars from './mars.js';

$('#weather').click(function () {
  event.preventDefault();
  let promise = Mars.getWeather();
  promise.then(function (response) {
    const body = JSON.parse(response);
    $('.marsWeather').text(`The high temp is ${body[698].AT.mx}C and the low temp is ${body[698].AT.mn}C and the average windspeed is ${body[698].HWS.av} kph`);
  });
});