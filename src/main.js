import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mars from './mars.js';

$('#weather').click(function () {
  event.preventDefault();
  let promise = Mars.getWeather();
  // .then returns the promise
  promise.then(function (resolvedResponse) {
    const body = JSON.parse(resolvedResponse);
    $('.marsWeather').text(`The high temp is ${body[698].AT.mx}°C and the low temp is ${body[698].AT.mn}°C with an average windspeed of ${body[698].HWS.av} kph`);
  }, function(rejectedResponse) {
    console.log("oh no, an error!");
    console.log(rejectedResponse);
  });
});

$('#astronomy').click(function () {
  event.preventDefault();
  let promise2 = Mars.getPicture();
  promise2.then(function(response) {
    const body = JSON.parse(response);
    $('.astronomyOutput').html(`This photo was taken by ${body.copyright} about this image ${body.explanation} <a href=${body.url}>Astronomy image</a>`);
  }, function(rejectedResponse) {
    console.log("oh no,an error!");
    console.log(rejectedResponse);
  });
});  

$('#rover').click(function () {
  event.preventDefault();
  let promise3 = Mars.getRover();
  promise3.then(function(response) {
    const body = JSON.parse(response);
    $('.roverOutput').html(`<a href=${body.photos[0].img_src}>Todays Rover photo</a>`);
  }, function(rejectedResponse) {
    console.log("oh no,an error!");
    console.log(rejectedResponse);
  });
});