import React from 'react';
import agent from '../../agent';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import ListErrors from '../ListErrors';
import LocationSearchInput from './LocationSearchInput';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
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
    onChangeAddress: (address) =>
        dispatch({ type: UPDATE_FIELD_LIST, key: 'address', value: address }),
    onLoad: (tab, pager, payload) =>
        dispatch({ type: LIST_PAGE_LOADED, tab, pager, payload }),
    onUnload: () =>
        dispatch({  type: LIST_PAGE_UNLOADED })
});

class List extends React.Component {


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
                    <Link to="/list/features">
                        Next
                    </Link>
                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">


                            <ListErrors errors={this.props.errors} />

                            <form >
                                <fieldset>


                                    <fieldset className="form-group">
                                        <input
                                    className="form-control form-control-md"
                                    type="text"
                                    placeholder="Title of Place"
                                    value={this.props.title}
                                    onChange={(evt) => this.changeProp('title',evt)} />
                                </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-sm"
                                            type="number"
                                            placeholder="0"
                                            value={this.props.num_Capable_of_Housing}
                                            onChange={(evt) => evt.target.value > -1 ? this.changeProp('num_Capable_of_Housing',evt): null } />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <LocationSearchInput
                                            changeIt={(address) => this.changeValue(address)}
                                            value={address}
                                        />
                                     </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-sm"
                                            type="number"
                                            placeholder="0"
                                            value={this.props.price}

                                            onChange={(evt) =>  this.changeProp('price',evt) } />
                                    </fieldset>


                                    <button
                                        className="btn btn-lg btn-primary pull-xs-right"
                                        type="submit"
                                        disabled={this.props.inProgress}>
                                        Sign in
                                    </button>

                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
