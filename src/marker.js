const markerBuild = require('mapbox-gl').Marker;

const icons = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
};

function markerFunc(type, place){
  let iconURL = icons[type];
  const newDOM = document.createElement('div');
  newDOM.style.width = '32px';
  newDOM.style.height = '39px';
  newDOM.style.backgroundImage = `url(${iconURL})`;
  return new markerBuild(newDOM).setLngLat(place);
}

module.exports = markerFunc;
