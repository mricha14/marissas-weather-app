if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
        var longitude =  position.coords.longitude;
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=imperial&APPID=b1b46ddd57e437199a6e8c273ed39634", function(data) {	
  $('#data h4').html(data['main']['temp'] + " F");

         
});
  });
}
  
$.ajax({ url:'http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true',
         success: function(data){
             $('#data h5').html(data.results[0].formatted_address);
             /*or you could iterate the components for only the city and state*/
         }
});
