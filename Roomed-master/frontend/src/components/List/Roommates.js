import React from 'react';
import agent from '../../agent';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import ListErrors from '../ListErrors';
import LocationSearchInput from './LocationSearchInput';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {
    ROOMMATES_PAGE_LOADED,
    ROOMMATES_PAGE_UNLOADED, UPDATE_FIELD_LIST
} from '../../constants/actionTypes';
import listreducer from "../../reducers/listreducer";

const Promise = global.Promise;
const mapStateToProps = state => ({ ...state.listreducer });



const mapDispatchToProps = dispatch => ({
    onChangeProp: (key,value) =>

        dispatch({ type: UPDATE_FIELD_LIST, key: key, value }),
    onChangeAddress: (address) =>
        dispatch({ type: UPDATE_FIELD_LIST, key: 'address', value: address }),
    onLoad: (tab, pager, payload) =>
        dispatch({ type: ROOMMATES_PAGE_LOADED, tab, pager, payload }),
    onUnload: () =>
        dispatch({  type: ROOMMATES_PAGE_UNLOADED })
});

class Roommates extends React.Component {


    constructor() {
        super();
        this.changeProp = (key,ev) => this.props.onChangeProp(key, ev.target.value); //update any property prop
        this.changeValue = (key,address) => this.props.onChangeAddress(key, address); //update any property prop

    }
    changeValue(newAddress) {
        console.log(newAddress);
        this.changeProp(newAddress);
    }
    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const address = this.props.address;
        return (
            <div className="auth-page">
                <div className="container page">

                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">


                            <ListErrors errors={this.props.errors} />

                            <form >
                                <fieldset>
                                    <h2> How Many Roommates do you have? </h2>
                                    <input
                                        className="form-control form-control-sm"
                                        type="number"
                                        placeholder="0"
                                        value={this.props.roommates}

                                        onChange={(evt) =>  this.changeProp('roommates',evt) } />

                                </fieldset>

                                <fieldset>

                                <h2> Have your roommates fill out bios  </h2>
                                    <div className="form-group">
                                        <label >Roommate #1 Email</label>
                                        <input type="email" class="form-control" placeholder="name@example.com"
                                               onChange={(evt) => this.changeProp('roommmate1',evt)} />
                                    </div>
                                    <div className="form-group">
                                        <label >Roommate #2 Email</label>
                                        <input type="email" class="form-control" placeholder="name@example.com"
                                        onChange={(evt) => this.changeProp('roommmate2',evt)} />

                                    </div>
                                </fieldset>


                                    <button>
                                        <Link to="/feed">
                                            Home
                                        </Link>
                                    </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roommates);
