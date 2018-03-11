//deleted alert that was here because it was annoying, this page is connected to homepage.html
// var googleMapsClient = require('@google/maps').createClient({
//   key: '&key=AIzaSyBm41DL_X-SFXrmzKtqzmy3YR2ZnynXoVE'
// });
 var mysql = require("mysql2");
 function initMap(address) {

            var geocoder = new google.maps.Geocoder();

            geocoder.geocode( { 'address': address}, function(results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                }

                console.log(latitude);
                console.log(longitude);

                var myLatLng = {lat: latitude, lng: longitude};

                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: myLatLng
                });

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!'
                });

            });


        }

  initMap(address);
      
var address = "3132 Stout Street, Denver, CO, 80205";


//pull address from db

//this code isn't needed with current google call
      // function initMap() {
      //   var uluru = {lat: -25.363, lng: 131.044};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 4,
      //     center: uluru
      //   });
      //   var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // }
    
      // var authKey = "&key=AIzaSyBm41DL_X-SFXrmzKtqzmy3YR2ZnynXoVE";
      // // var address = "1600+Amphitheatre+Parkway,+Mountain+View,+CA";
      // var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
      // var completeQueryURL = queryURL + authKey;


      // $.ajax({
      //       url: completeQueryURL,
      //       method: "GET"
      //     }).then(function(response) {
      //       console.log(response);
      //     });