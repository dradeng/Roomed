import React, { Component } from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT, UPDATE_VALUE } from '../../constants/actionTypes';
import profile from "../../reducers/profile";

var History = require("react-router").History;



  const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
      isShowing: state.common.isShowing,

  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT }),
 onChangeValue: (key,value) =>
  dispatch({ type: UPDATE_VALUE, key: key, value }),


});


export class Profile extends Component {
  
  
 constructor() {
        super();
        this.changeValue = (key,ev) => this.props.onChangeValue(key, ev.target.value); //update any property prop

    }

  componentWillUnmount(){
    this.userListener.remove();
    this.yardListener.remove();
  }
  
  state(){
    console.log("E", this.state);
  }
    render() {
    var profileImageShowDiv = {
       backgroundImage: 'url(' + 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/21/13/borat.jpg?w968h681'+ ')'
    };
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div className="col-md-4"  >
         <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/21/13/borat.jpg?w968h681" class="img-circle img-responsive" alt="Cinque Terre" /> 
        </div>
        <div className="col-md-8">
          <form>
            <label>First Name</label>
            <input type="text" className="form-control" placeholder='Jacob'/>
            <br/>
            <label>Last Name</label>
            <input type="text" className="form-control" placeholder='Young'/>
            <br/>
            <label>Email</label>
            <input onChange={(evt) => this.changeValue('email',evt)}  value={this.props.email} type="email"  className="form-control" placeholder='je.young@me.com'/>
            <br/>
            <label>About me</label>
            <textarea  className="form-control" placeholder='hello'/>
            <br/>
            <label>Birthday</label>
            <input type="date"  className="form-control" placeholder='10/30/1997'/>
            <br/>
            <label>Gender</label>
            <input type="text"  className="form-control" placeholder='Male'/>
            <br/>
            <label>Photo URL</label>
            <input type="text"  className="form-control" placeholder='http://www.hdwallpaperspulse.com/wp-content/uploads/2013/05/url.jpg'/>
            <br/>
            <button className="btn blue-btn" type="submit">Update Info</button>
          </form>
        </div>
        <div className="col-md-4"> 
        <h3 className="user-properties-font pro-edit-drop">Your Properties: </h3>
        </div> 

      </div>
    );
  }
}
window.Profile = Profile;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
