import React from 'react';
import agent from '../../agent';
import { Link } from 'react-router-dom';
import "react-toggle/style.css"
import { connect } from 'react-redux';
import ListErrors from '../ListErrors';
import LocationSearchInput from './LocationSearchInput';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Toggle from 'react-toggle'

import {
    LIST_PAGE_LOADED,
    LIST_PAGE_UNLOADED, UPDATE_FIELD_LIST
} from '../../constants/actionTypes';
import listreducer from "../../reducers/listreducer";

const Promise = global.Promise;
const mapStateToProps = state => ({ ...state.listreducer });



const mapDispatchToProps = dispatch => ({
    onChangeProp: (key,value) =>
        dispatch({ type: UPDATE_FIELD_LIST, key: key, value }),
    onChangeToggle: (key,value) =>
        dispatch({ type: UPDATE_FIELD_LIST, key: key, value: value }),

});

class Features extends React.Component {


    constructor() {
        super();
        this.changeProp = (key,ev) => this.props.onChangeProp(key, ev.target.value); //update any property prop
        this.changeValue = (key,val) => this.props.onChangeProp(key, val);
    }


    componentWillUnmount() {
    }

    render() {
        const address = this.props.address;
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div>
                        {this.props.address}
                        </div>
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <Link to="/list/roommates">
                                Next
                            </Link>

                            <ListErrors errors={this.props.errors} />
                            <h2> What does your apartment have? </h2>
                            <form>
                                <div className="row">
                                        <fieldset  style={{margin: 20}} className="form-group col-sm-1">

                                            <label>
                                                <Toggle
                                                    defaultChecked={this.props.furnished}
                                                    onChange={(ev) => this.changeValue('furnished', ev.target.checked)}/>
                                                <span>Furnished</span>
                                            </label>


                                        </fieldset>
                                        <fieldset style={{margin: 20}} className="form-group col-sm-1">

                                            <label>
                                                <Toggle
                                                    defaultChecked={this.props.wifi}
                                                    onChange={(ev) => this.changeValue('wifi', ev.target.checked)}/>
                                                <span>Wifi</span>
                                            </label>
                                        </fieldset>

                                        <fieldset style={{margin: 20}} className="form-group col-sm-1">

                                            <label>
                                                <Toggle
                                                    defaultChecked={this.props.laundry_Washer}
                                                    onChange={(ev) => this.changeValue('laundry_Washer', ev.target.checked)}/>
                                                <span>laundry Washer</span>
                                            </label>
                                        </fieldset>

                                        <fieldset style={{margin: 20}}  className="form-group col-sm-1">


                                            <label>
                                                <Toggle
                                                    defaultChecked={this.props.parking}
                                                    onChange={(ev) => this.changeValue('parking', ev.target.checked)}/>
                                                <span>Parking</span>
                                            </label>
                                        </fieldset>
                                        <fieldset className="form-group col-sm-1"  style={{margin: 20}}>

                                    <label>
                                        <Toggle
                                            defaultChecked={this.props.tv}
                                            onChange={(ev) => this.changeValue('tv',ev.target.checked)} />
                                        <span>tv</span>
                                    </label>
                                    </fieldset>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features);
