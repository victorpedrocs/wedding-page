import '../fonts/winter/font.scss';
import 'mini.css/src/flavors/mini-default.scss';
import '../style/main.scss';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// document.L = L;

function disableInteractions(map) {
  map.scrollWheelZoom.disable();
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.boxZoom.disable();
  map.keyboard.disable();
  if (map.tap)
      map.tap.disable();
}

// const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const mapOptions = {
//   maxZoom: 4
// }
// const osm = L.tileLayer(osmUrl, mapOptions);
// const map = L.map('map').setView([51.505, -0.159], 15).addLayer(osm);

// L.marker([51.504, -0.159]).addTo(map);

(function($) {
  
  let overlay = $.getElementById('gmaps');
  let map = $.getElementById('map');
  
  map.classList.add('scrolloff');

  overlay.addEventListener('click', function() {
    map.classList.remove('scrolloff');
  });
  map.addEventListener('mouseleave', function() {
    map.classList.add('scrolloff');
  });

})(document);