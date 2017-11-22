var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b5a9fa1fb2815ceda28b2046fbe8535b&units=imperial';

//

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.messsage)
			} else {
				return res.data.main.temp;
			}
		}, function(err) {
			throw new Error('Unable to find the location for this search.');
		})
	}
}