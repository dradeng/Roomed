
import React from 'react';
import './property.css';

const Property = props => {
  const property = props.property;

  const buttonStyle = {
    background: '#3ec6ff',
    borderRadius: 6,
    width: 150,
    height: 45,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#ffffff',
    marginRight: 10,
    marginTop: 5

  };
  const buttonText = {
    background: '#3ec6ff',
    borderRadius: 6,
  };
console.log(property.image1);
  return (
  <div style={{marginLeft: 4, marginTop: 10}} className="col-sm-3" >
    <div className="cardBackground">
        <div className="propertyHeader">
          <div className="card-body propertyTitle">
                <p> {property.title} </p>
                <p> Park Avenue </p>
          </div>
          <div>
          </div>
        </div>
        <div className="imageContainer">
          <img className="img-responsive" src={property.image1} alt="Card image cap"/>
          <p className="top-right">{property.price}</p>
        </div>

        <div className="row">
          <div className="col-sm-6 info">
            <div>
              <div className="row">
                <div className="col-sm-2">
                <i className="glyphicon glyphicon-user" style={{color:'#868686',marginTop:10}}/>
                </div>
                <div className="col-sm-10">
                <p className="date">{property.num_Capable_of_Housing}</p>
                </div>

            </div>
            <div className="row">
              <div className="col-sm-2">
                <i class="glyphicon glyphicon-calendar" style={{color:'#868686'}}/>
              </div>
              <div className="col-sm-10">
              <p className="date">{property.start_date} to {property.end_date}</p>
              </div>

            </div>
           </div>
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
