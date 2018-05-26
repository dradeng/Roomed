
import React from 'react';
import './property.css';

const Property = props => {
  const buttonStyle = {
    background: '#3ec6ff',
    borderRadius: 6,
    width: 172,
    height: 45,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#ffffff',
    marginRight: 12

  };
  const buttonText = {
    background: '#3ec6ff',
    borderRadius: 6,
  };

  return (
  <div className="col-sm-4" >
    <div className="cardBackground">
        <div className="propertyHeader">
          <div className="card-body propertyTitle">
                <p> Hey </p>
                <p> Park Avenue </p>
          </div>
          <div>
          </div>
        </div>
        <div className="imageHolder">
          <img className="img-responsive" src="http://www.hdwallpaperspulse.com/wp-content/uploads/2013/05/url.jpg" alt="Card image cap"/>
        </div>
        <div className="row">
          <div className="col-sm-4 info">
          <p> Hello </p>
            <p> Jacoby </p>

          </div>
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
          <button style={buttonStyle}>Book Now</button>
          </div>
        </div>
    </div>
  </div>

  );
};

export default Property;
