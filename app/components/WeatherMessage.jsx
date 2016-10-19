var React = require('react');
var PropTypes = React.PropTypes;
//
// var WeatherMessage = React.createClass({
//   render: function() {
//     var {location,temp}=this.props;
//     return (
//       <div>
//         <p>The weather report for {location} is {temp}</p>
//       </div>
//     );
//   }
//
// });

var WeatherMessage=(props)=>{
  var {location,temp}=props;
  return (
    <div>
      <p>The weather report for {location} is {temp}</p>
    </div>
  );
}

module.exports = WeatherMessage;
