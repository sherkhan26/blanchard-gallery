ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("myMap", {
    center: [55.758338, 37.600290],
    zoom: 13
  });

  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('ymaps-2-1-79-controls__control')

  var myPlacemark = new ymaps.Placemark([55.758338, 37.600290], {}, {
    iconLayout: "default#image",
    iconImageHref: "/img/contacts/Ellipse 14.svg",
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}
