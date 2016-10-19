var React = require('react');
var PropTypes = React.PropTypes;

var Nav =require('Nav');


var Main=(props)=> {
  return (
    <div className="container">
      <Nav/>
      <h4>
        Main Component
      </h4>
      {props.children}
    </div>

  );
}

module.exports = Main;
