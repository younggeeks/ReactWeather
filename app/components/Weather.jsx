var React = require('react');
var PropTypes = React.PropTypes;

var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');

var openweathermap=require('OpenWeatherMap');

var Weather = React.createClass({
  handleSearch:function (location) {

    var  that=this;
    this.setState({
      isLoading:true
    });
    openweathermap.getTemp(location).then(function (temp) {
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function (error) {
      console.log("This is aweseome",error);
      that.setState({
        isLoading:false
      });
    });
  },
  getInitialState:function () {

  return { isLoading:false}
  },
  render: function() {
    var {temp,location,isLoading}=this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather </h3>;
      }else if(temp && location){
        return   <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return (
      <div className="col-md-6 col-md-offset-3 text-center">
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
