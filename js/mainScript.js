$(document).ready(function(){
	// default city => Sofia,Bulgaria
	$('#city').val("Sofia");
	// API GET request
	$('#btn').click(function(){
		
var city = $('#city').val(); // get text value
	$.ajax("https://api.apixu.com/v1/current.json?key=9b72b8923a6a4908a76185920191806",{
	method: "GET",
	data: {
			q: city,
			'api-key': '9b72b8923a6a4908a76185920191806'
			},
	success: function(data){
	
	if(data.current.is_day == 0)
	{
		// its night
		var condition = data.current.condition.text;
		
		if(condition == "Partly cloudy" || condition == "Cloudy" || condition == "Overcast" || condition == "Patchy freezing drizzle possible" )
		{
			// its cloudy night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex nPartlyCloudy");
			$('#res').addClass("nText");
		}
		if(condition == "Patchy snow possible" || condition == "Blowing snow" || condition == "Blizzard" || condition == "Patchy light snow" 
		|| condition == "Light snow" || condition == "Patchy moderate snow" || condition == "Moderate snow" || condition == "Patchy heavy snow"
		|| condition == "Heavy snow" || condition == "Ice pellets" || condition == "Light snow showers" || condition == "Moderate or heavy snow showers"
		|| condition == "Light showers of ice pellets" || condition == "Moderate or heavy showers of ice pellets")
		{
			// snowy night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex nSnow");
			$('#res').addClass("nText");

		}
		if(condition == "Mist" || condition == "Fog" || condition == "Freezing fog")
		{
			// mist night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex nMist");
			$('#res').addClass("nText");

		}
		if(condition == "Clear")
		{
			// clear night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex nClear");
			$('#res').addClass("nText");

		}
		if(condition == "Patchy rain possible" || condition == "Light rain" || condition == "Patchy sleet possible" || condition == "Patchy light drizzle"
		|| condition == "Light drizzle" || condition == "Freezing drizzle" || condition == "Heavy freezing drizzle" || condition == "Patchy light rain"
		|| condition == "Light rain" || condition == "Moderate rain at times" || condition == "Moderate rain" || condition == "Heavy rain at times" 
		|| condition == "Heavy rain" || condition == "Light freezing rain" || condition == "Moderate or heavy freezing rain" || condition == "Light sleet"
		|| condition == "Moderate or heavy sleet" || condition == "Light rain shower" || condition == "Moderate or heavy rain shower" 
		|| condition == "Torrential rain shower" || condition == "Light sleet showers" || condition == "Moderate or heavy sleet showers")
		{
			// rainy night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex nRain");
			$('#res').addClass("nText");

		}
		if(condition == "Thundery outbreaks possible" || condition == "Patchy light rain with thunder" || condition == "Moderate or heavy rain with thunder"
		|| condition == "Patchy light snow with thunder" || condition == "Moderate or heavy snow with thunder")
		{
			
			// mist night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex nThunder");
			$('#res').addClass("nText");

		}
		//
	}
	else{ // Is day
	
		var condition = data.current.condition.text;
		
		if(condition == "Partly cloudy" || condition == "Cloudy" || condition == "Overcast" || condition == "Patchy freezing drizzle possible" )
		{
			// its cloudy night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex dCloudy");
			$('#res').addClass("nText");
		}
		if(condition == "Patchy snow possible" || condition == "Blowing snow" || condition == "Blizzard" || condition == "Patchy light snow" 
		|| condition == "Light snow" || condition == "Patchy moderate snow" || condition == "Moderate snow" || condition == "Patchy heavy snow"
		|| condition == "Heavy snow" || condition == "Ice pellets" || condition == "Light snow showers" || condition == "Moderate or heavy snow showers"
		|| condition == "Light showers of ice pellets" || condition == "Moderate or heavy showers of ice pellets")
		{
			// snowy night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex dSnow");
			$('#res').addClass("nText");

		}
		if(condition == "Mist" || condition == "Fog" || condition == "Freezing fog")
		{
			// mist night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex dMist");
			$('#res').addClass("nText");

		}
		if(condition == "Sunny")
		{
			// clear night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex dSunny");
			$('#res').addClass("nText");

		}
		if(condition == "Patchy rain possible" || condition == "Light rain" || condition == "Patchy sleet possible" || condition == "Patchy light drizzle"
		|| condition == "Light drizzle" || condition == "Freezing drizzle" || condition == "Heavy freezing drizzle" || condition == "Patchy light rain"
		|| condition == "Light rain" || condition == "Moderate rain at times" || condition == "Moderate rain" || condition == "Heavy rain at times" 
		|| condition == "Heavy rain" || condition == "Light freezing rain" || condition == "Moderate or heavy freezing rain" || condition == "Light sleet"
		|| condition == "Moderate or heavy sleet" || condition == "Light rain shower" || condition == "Moderate or heavy rain shower" 
		|| condition == "Torrential rain shower" || condition == "Light sleet showers" || condition == "Moderate or heavy sleet showers")
		{
			// rainy night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex dRain");
			$('#res').addClass("nText");

		}
		if(condition == "Thundery outbreaks possible" || condition == "Patchy light rain with thunder" || condition == "Moderate or heavy rain with thunder"
		|| condition == "Patchy light snow with thunder" || condition == "Moderate or heavy snow with thunder")
		{
			
			// mist night
			$('.container-fluid').removeClass().addClass("container-fluid d-flex dThunder");
			$('#res').addClass("nText");

		}
	}
	var img = data.current.condition.icon.substring(2);
	$("#icon").html("<img src='http://"+img+"'></img>");
	$("#res").html("<span class='lead'>It's <strong>"+data.current.temp_c+"&#8451;</strong> in <strong>"+city+"</strong>.It's <strong>"+data.current.condition.text+"</strong>.<br> Wind speed: <strong>"+data.current.wind_kph+" </strong> km/h"
	+"<br> Humidity: <strong>"+data.current.humidity+" </strong> %"+"<br> </span>");
	},
	error: function(data){
		
		$('#res').html("Not found");
	}});
	});
	// Get data for the default city (def. city is defined at the top of this file)
	$('#btn').trigger('click');

});

