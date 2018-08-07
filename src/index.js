const mapboxgl = require('mapbox-gl');
const markerFunc = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlbGxhc3l5dW4iLCJhIjoiY2prazRmODBjMGhlZzNwcDhnODllbzA1cSJ9.YC5g_xN-zIIRWf0WeCtNJQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 15,
  style: 'mapbox://styles/mapbox/streets-v10'
});

markerFunc('activity', [-74.009151, 40.705086]).addTo(map);
markerFunc('restaurant', [-74.010097, 40.706263]).addTo(map);
markerFunc('hotel', [-74.008913, 40.706928]).addTo(map);

console.log(map);
