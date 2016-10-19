var React = require('react');
var PropTypes = React.PropTypes;

var WeatherForm = React.createClass({
  onFormSubmit:function (e) {
    e.preventDefault();
    var location=this.refs.location.value;

     if (location.length>0) {
       this.refs.location.value='';
       this.props.onSearch(location);
     }
  },
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Get Weather</h3>
        </div>
        <div className="panel-body ">
          <form className="text-center" onSubmit={this.onFormSubmit}>
          <input style={{marginBottom:30}} type="text" ref="location" className="form-control" placeholder="Enter City Name"/>
          <button  className="btn btn-success ">Get Weather</button>
            </form>
        </div>

      </div>
    );
  }

});

module.exports = WeatherForm;
