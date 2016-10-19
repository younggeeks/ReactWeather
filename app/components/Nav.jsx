var React = require('react');
var PropTypes = React.PropTypes;

var {Link,IndexLink}=require('react-router');

// 
// var Nav = React.createClass({
//
//   render: function() {
//     return (
// <nav className="navbar navbar-inverse">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span classclassName="icon-bar"></span>
//             <span classclassName="icon-bar"></span>
//           </button>
//           <a className="navbar-brand" href="#">React Weather</a>
//         </div>
//
//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
//           <div className="nav navbar-nav">
//             <li activeClassName="active">  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink> </li>
//             <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
//               <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
//           </div>
//
//         </div>
//       </div>
//     </nav>
//     );
//   }
//
// });

var Nav=(props)=>{
  return (
<nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span classclassName="icon-bar"></span>
          <span classclassName="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">React Weather</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <div className="nav navbar-nav">
          <li activeClassName="active">  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink> </li>
          <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
        </div>

      </div>
    </div>
  </nav>
  );
}

module.exports = Nav;
