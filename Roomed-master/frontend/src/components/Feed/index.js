import Property from './Property';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './feed.css';
import Sample from './sampleFeed.json';
import {
  FEED_PAGE_LOADED,
  FEED_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import PostSubletForm from '../subcomponents/PostSubletForm';
const Promise = global.Promise;



  const properties =
  Sample.map(property => {
    return (
      <div className="col-sm-5">

                    <Property  key={property.address} property={property} />
</div>
                  );
      })

const mapStateToProps = state => ({
  ...state.Feed,
  appName: state.common.appName,
  token: state.common.token
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
      dispatch({  type: FEED_PAGE_UNLOADED })
});

class Feed extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
  componentWillMount() {

  }

  componentWillUnmount() {
    this.props.onUnload();
  }



  render() {
    return (
      <div className="backgroundNewCover">
        <div className="row">
          <div className="col-sm-9">
          {properties}
          </div>
          <div className="col-sm-3" style={{positioned:'fixed',  y: 0,overflow: 'hidden',zIndex: 5}}>
            <MyMapComponent className="col-sm-4"
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBob7qS5XZFENWz5u8UCRFvLaOXxhh3geE"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px`,position:'relative',
       }} />}
              mapElement={<div style={{ height: '100%',width:'100%',margin:5, positioned:'fixed',  y: 0,overflow: 'hidden',zIndex: 5,
 }} />}
            />
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
