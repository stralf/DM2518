var map;
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(59.347327,18.073537),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true
  };
  map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

google.maps.event.addDomListener(zoomIn, 'click', zoomControl("+"));
google.maps.event.addDomListener(zoomOut, 'click', zoomControl("-"));
}
google.maps.event.addDomListener(window, 'load', initialize);

function zoomControl(zoomType){
var currentZoomLevel = map.getZoom();
if (zoomType=='+'){
	if(currentZoomLevel != 21){
		map.setZoom(currentZoomLevel + 1);
	}

}
if (zoomType=='-'){

	if(currentZoomLevel != 0){
		map.setZoom(currentZoomLevel - 1);}


}

}

