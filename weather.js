'use strict'

const url = "http://api.openweathermap.org/data/2.5/weather?q=Manila&APPID=7f5dd7ea563dd4f3ceab8e8386c09e64";

$.ajax ({
     url: url, 
     success: function (result) {
     	console.log(result);
        //Output the location
     	$('#location').text(result.name);

        //Display the temperature
        let c = Math.round(result.main.temp - 273.15);
        let displayTemp = `Temperature: ${c}&#8451;`
        $('#temperature').html(displayTemp);
          
        //Display the Wind Speed
        let windSpeed = Math.round(result.wind.speed / .44704);
        let wind = windSpeed.toString();
        $('#wind').text(wind);

        //Display Sky Condition
     	$('#sky').text(result.weather[0].description);
        


     }
})