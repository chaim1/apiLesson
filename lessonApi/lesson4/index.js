'use strict';


function Coords(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
}
function Marker(color, coords) {
    this.color = color;
    this.coords = coords;
}

function buildUrl(coords, markers, apiKey) {
    let stringBuilder = '';
    stringBuilder += 'https://maps.googleapis.com/maps/api/staticmap?center=';
    stringBuilder += coords.latitude;
    stringBuilder += ',';
    stringBuilder += coords.longitude;
    stringBuilder += '&markers=color:blue%7Clabel:S%7C';

    for(let i=0; i < markers.length; i++) {
        stringBuilder += '&markers=';
        stringBuilder += 'color:';
        stringBuilder += markers[i].color;
        stringBuilder += '%7Clabel:S%7C';
        stringBuilder += markers[i].coords.latitude;
        stringBuilder += ',';
        stringBuilder += markers[i].coords.longitude;
    }

    stringBuilder += '&zoom=13&size=600x300&key=';
    stringBuilder += apiKey;
    return stringBuilder;
}

const markers = [];
markers.push(new Marker('green', new Coords(31.75055, 35.18546)));
var img = new Image();
    img.src = buildUrl(new Coords(31.75055, 35.18546), markers, 'AIzaSyDjvYQFGcrQ-1IVEXF0T3W1KelpSmpysVo');
    function imge(){
document.getElementById('out').appendChild(img);
}
// console.log(buildUrl(new Coords(31.75055, 35.18546), markers, 'AIzaSyDjvYQFGcrQ-1IVEXF0T3W1KelpSmpysVo'));
navigator.geolocation.getCurrentPosition();
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}