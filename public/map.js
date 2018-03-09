//deleted alert that was here because it was annoying, this page is connected to homepage.html



      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    


var authKey = "&key=AIzaSyBm41DL_X-SFXrmzKtqzmy3YR2ZnynXoVE";
var address = "1600+Amphitheatre+Parkway,+Mountain+View,+CA";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
var completeQueryURL = queryURL + address + authKey;


$.ajax({
      url: completeQueryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });