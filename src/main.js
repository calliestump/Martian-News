import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mars from '.js/mars.js'

$('#weather').submit(function () {
  event.preventDefault();
  let promise = Mars.getWeather();

  promise.then(function (response) {
    const body = JSON.parse(response);
    $("#highTemp").text(`High Temp ${body.698.AT.mx}`);
    $("#lowTemp").text(`Low Temp ${body.698.AT.mn}`);
    $("#windSpeed").text(`Wind Speed ${body.698.HWS.av}`);
  });
});