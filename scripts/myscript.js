$(document).ready(function(){
	$( "#tabs" ).tabs();
});

$(document).ready(function(){
	var map;
	function initialize() {
		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(40.5912356, -73.965855),
			mapTypeId: google.maps.MapTypeId.HYBRID
			};
		map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});

$(document).ready(function(){
	$("#map-canvas").addClass("hidden");
});

$(document).ready(function(){
	$("#mapper").click(function(){
		$("#map-canvas").removeClass("hidden");
	});
});

$(document).ready(function(){
	$(".hider").click(function(){
		$("#map-canvas").addClass("hidden");
	});
});

$(document).ready(function() {
	$.ajax({
	url : "http://api.wunderground.com/api/3d750b7b57d5b2d4/geolookup/conditions/q/NY/Brooklyn.json",
	dataType : "jsonp",
	success : function(parsed_json) {
	var temp = parsed_json['current_observation']['temperature_string'];
	var humidity = parsed_json['current_observation']['relative_humidity'];
	var wind = parsed_json['current_observation']['wind_string'];
	var icon = parsed_json['current_observation']['icon_url'];
	var weather = parsed_json['current_observation']['weather'];
	var precip = parsed_json['current_observation']['precip_today_string'];
	$("#icon").html("<img src='" + icon + "' alt='current conditions icon'>")
	$("#weather").text(weather);
	$("#temp").text(temp);
	$("#humidity").text(humidity);
	$("#wind").text(wind);
	$("#precip").text(precip);
	}
	});
});

$(document).ready(function() {
var url = "http://gdata.youtube.com/feeds/api/videos?vq=Brooklyn&max-results=5&orderby=published&alt=json";
        	$.getJSON(url, function (data) {
            	$.each(data.feed.entry, function (i, item) {
                	var url = item.link[0].href;
                    var title = item.title.$t;
                    var thumbnailURL = item.media$group.media$thumbnail[0].url;
                    var text = "<div><h5>" + title + "</h5><p><a href='" + url + "' target='_blank'><img src='" + thumbnailURL + "' /></a></p></div>"
                     $("#video").append(text);
               });
         });
});