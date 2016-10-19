var axios=require('axios');

var logger=require('axios-response-logger');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?&appid=0d94704157df7429a3f5984af61c8e2b&units=imperial';

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0d94704157df7429a3f5984af61c8e2b


module.exports = {
  getTemp:function (location) {
    var encodedLocation=encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return  axios.get(requestUrl).then(function (data) {
      if(data.data.cod && data.data.message){
        throw new Error(data.data.message);
      }else{
        return data.data.main.temp;
      }
    }).catch(function(error) {
      throw new Error(error.data.message);
    });
  }
};
