var map;
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(59.347327,18.073537),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true
  };
  map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

}
google.maps.event.addDomListener(window, 'load', initialize);
