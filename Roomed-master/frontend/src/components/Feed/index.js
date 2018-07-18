import Property from './Property';
import React from 'react';
import agent from '../../agent';

import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
    import  ScrollArea from 'react-scrollbar';

import './feed.css';
import Sample from './sampleFeed.json';

import {
  FEED_PAGE_LOADED,
  FEED_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  CHANGE_FILTER_VALUE,
  SHOW_FILTER
} from '../../constants/actionTypes';
import PostSubletForm from '../subcomponents/PostSubletForm';
import Filter from '../Filter';

const Promise = global.Promise;



  const properties =
  Sample.map(property => {
    return (
      <div  className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{marginBottom: 10}}>

                    <Property  key={property.address} property={property} />
                    <Property  key={property.address} property={property} />
      </div>
                  );
      })

const mapStateToProps = state => ({
  ...state.Feed,
  appName: state.common.appName,
  token: state.common.token,
        filterView: state.feed.filterView,

});

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
      dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
    onLoad: (tab, pager, payload) =>
      dispatch({ type: FEED_PAGE_LOADED, tab, pager, payload }),
    onUnload: () =>
      dispatch({  type: FEED_PAGE_UNLOADED }),
    onClickFilter: () =>
      dispatch({ type: SHOW_FILTER}),
    onChangeFitlerProp: (key,value) =>
        dispatch({ type: CHANGE_FILTER_VALUE, key: key, value }),
      onChangePrice: (key,min,max) =>
        dispatch({ type: CHANGE_FILTER_VALUE, key: key, min, max }),

});

class Feed extends React.Component {




    constructor(props) {
        super(props);
        this.changeFilterProp = (key,value) => this.props.onChangeFitlerProp(key, value); //update any property prop
        this.changeFilterPrice = (key,min,max) => this.props.onChangePrice(key, min,max); //update any property prop

        
    }
  componentWillMount() {

  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  renderColumn()
  {
    if (this.props.filterView)
    {
      return ( <div style={{flex: 1,height: '100%'}}>
        <Filter handler = {this.props.onChangePrice}/>
        <div> {properties} </div> 
        </div> 
 );
    }
    else {
      return ( <div> {properties} </div> )
    }
  }

  render() {
    return (
      <div className="backgroundNewCover" >
          <input type="text" style={{ zIndex: 500,fontSize: 16, marginBottom: 15, width: 500, marginLeft: 20, paddingLeft: 4,  background: '#fff',  flex: 1}} className="form-control" placeholder="Search for."/>
          <button onClick={() => this.props.onClickFilter()} > Click Me </button> 
          <i className="fas fa-filter">  </i>


        <div className="row" style={{position: 'fixed'}}>

          <div  style={{ height: "1000px", overflow: "auto" ,marginBottom: 50}} className="col-sm-7" >

           {this.renderColumn()}

          </div>
          <div className="col-sm-5" >
              <div className="sticky-top">

          
            <MyMapComponent className="col-sm-12"
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBob7qS5XZFENWz5u8UCRFvLaOXxhh3geE"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px`,position:'relative',
       }} />}
              mapElement={<div style={{ height: '100%',width:'100%',margin:5, positioned:'fixed',  y: 0,overflow: 'hidden',zIndex: 5,
 }} />}
            /> 
          </div>
            </div>

        </div>
        <div className="footer"> </div>
      </div>
    );
  }
}
/*


            */
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
