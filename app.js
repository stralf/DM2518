var map;
//testing

function initialize() {
  var mapProp = {
	    center:new google.maps.LatLng(59.347327,18.073537),
	    zoom:16,
	    mapTypeId:google.maps.MapTypeId.TERRAIN,
	    disableDefaultUI: true
	  };

	  map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

		marker_draggable = new google.maps.Marker({
	    map:map,
	    draggable:true,
	    animation: google.maps.Animation.DROP,
	    position: new google.maps.LatLng(59.347327,18.073537)
	  });

		marker_not_draggable = new google.maps.Marker({
	    map:map,
	    draggable:false,
	    position: new google.maps.LatLng(59.347327,18.073537)
	  });

	  google.maps.event.addListener(marker_draggable, 'click', toggleBounce);
		google.maps.event.addDomListener(zoomIn, 'click', zoomingIn);
		google.maps.event.addDomListener(zoomOut, 'click', zoomingOut);
		google.maps.event.addDomListener(left, 'click', panLeft);
		google.maps.event.addDomListener(right, 'click', panRight);
		google.maps.event.addDomListener(up, 'click', panDown);
		google.maps.event.addDomListener(down, 'click', panUp);
}

google.maps.event.addDomListener(window, 'load', initialize);

function zoomingIn() {
   		var currentZoomLevel = map.getZoom();
  		 if(currentZoomLevel != 21){
     			map.setZoom(currentZoomLevel + 1);}
 };

function toggleBounce() {

  if (marker_draggable.getAnimation() != null) {
    marker_draggable.setAnimation(null);
  } else {
    marker_draggable.setAnimation(google.maps.Animation.BOUNCE);
  }
}


function zoomingOut() {
   		var currentZoomLevel = map.getZoom();
  		 if(currentZoomLevel != 0){
     			map.setZoom(currentZoomLevel - 1);}
 };


function panLeft(){
		var center = map.getCenter();
		var new_center = new google.maps.LatLng(center.lat(), center.lng() - 0.01); 
		map.setCenter(new_center);
}

function panRight(){
		var center = map.getCenter();
		var new_center = new google.maps.LatLng(center.lat(), center.lng() + 0.01); 
		map.setCenter(new_center);
}

function panUp(){
		var center = map.getCenter();
		var new_center = new google.maps.LatLng(center.lat() - 0.01, center.lng()); 
		map.setCenter(new_center);
}

function panDown(){
		var center = map.getCenter();
		var new_center = new google.maps.LatLng(center.lat() + 0.01, center.lng()); 
		map.setCenter(new_center);
}
