var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2153618fec01a6aebf6f8f80d376978f&units=imperial';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		return axios.get(requestUrl).then(
			
			function(res){
				console.log('success', res);
				if (res.data.cod && res.data.message){
					console.log('error in success', res);
					throw new Error(res.data.message);
				}else{
					return res.data.main.temp;
				}
			},
			function(res){
				console.log('error', res);
				throw new Error(res.data.message);
			}
		);
	}
}
