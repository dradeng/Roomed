import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './propertydetail.css';
import  DateComponent  from './DateComponent';
import {
  PROPERTY_PAGE_LOADED,
  PROPERTY_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.ProperyView,
  appName: state.common.appName,
  token: state.common.token,

});
/*
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))
*/

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: PROPERTY_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: PROPERTY_PAGE_UNLOADED })
});
/*
class PropertyView extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            showMap: true
        };
    }


    componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        this.state.showMap =false;
    }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
   /* return (
        <div style={{width: "100%", marginLeft: 10}} className="backgroundNewCover">


            <div className="row" >
                <div style={{marginLeft: 20,marginTop: 10}} className="col-sm-6">
                    <div className="propertyHeader row">

                        <div style={{marginLeft: 20}} className="propertyInfoBox row">

                            <div>
                                <div className="propertyAndImage row">
                                    <img style={{height: 140, width: 180}} src={"http://images6.fanpop.com/image/answers/544000/544974_1410976691194_300_300.jpg"} className="img-circle col-sm-4" alt="Cinque Terre" />
                                    <div style={{marginTop: 50}}  className="propertyTitleText col-sm-7">
                                        <p style={{marginBottom: 0}}> Jacob's Property </p>
                                        <p style={{marginTop: 0}}> .5 Miles from 5th Avenue </p>
                                    </div>

                                </div>
                                <div className="col-sm-4">
                                    <button text="Button"  style={{marginTop: 10}} className= "contactbutton">
                                        <div className="contacttext"> Contact </div>
                                    </button>

                                </div>
                                <div className="col-sm-6">
                                    <div className="row" style={{marginBottom: 16}}>
                                        <div className="bullet col-sm-8">
                                            Language Spoken
                                        </div>
                                        <div className="answer col-sm-4">
                                            Jacobine
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: 16}}>
                                        <div className="bullet col-sm-8">
                                           Room Type
                                        </div>
                                        <div className="answer col-sm-4" >
                                            Private
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: 16}}>
                                        <div className="bullet col-sm-8">
                                            Bathrooms
                                        </div>
                                        <div className="answer col-sm-4">
                                            2
                                        </div>
                                    </div>
                                    <div className="row" style={{marginBottom: 16}}>
                                        <div className="bullet col-sm-8">
                                           Neighborhood
                                        </div>
                                        <div className="answer col-sm-4">
                                            Central
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="roommates">

                    </div>
                    <div className="potentialRoomates">

                    </div>
                </div>
                <div className="col-sm-5" style={{positioned: 'fixed', y: 0, overflow: 'hidden', zIndex: 5}}>
                    <div className="imageContainer">
                        <img className="img-responsive"
                             src={("http://www.hdwallpaperspulse.com/wp-content/uploads/2013/05/url.jpg")}
                             alt="Card image cap"/>
                        <p className="top-right">125</p>
                    </div>
                    <div style={{marginTop: 10,marginBottom: 300, zIndex: 5}}>
                        <div className="row">
                        <i style={{color: 'grey',fontSize: 20}} className="col-sm-1 glyphicon glyphicon-calendar"/>
                            <DateComponent onClick={this.handleClick} className="col-sm-11" />

                        </div>
                    </div>

                    {this.state.showMap &&
                    <MyMapComponent className="col-sm-4"
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBob7qS5XZFENWz5u8UCRFvLaOXxhh3geE"
                                    loadingElement={<div style={{height: `100%`}}/>}
                                    containerElement={<div style={{
                                        height: `400px`, position: 'relative',
                                    }}/>}
                                    mapElement={<div style={{
                                        height: '100%',
                                        width: '100%',
                                        margin: 5,
                                        positioned: 'fixed',
                                        y: 0,
                                        overflow: 'hidden',
                                        zIndex: 5,
                                    }}/>}
                    />
                    }


                </div>


            </div>
            <div className="footer"></div>
        </div>
    ); AIRPLANE MODE
    */
class PropertyView extends React.Component {

    render() {
        return (<div> hello </div> );
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyView);
