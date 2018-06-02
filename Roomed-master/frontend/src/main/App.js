import agent from '../agent';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import Feed from '../components/Feed';
import Property from '../components/PropertyView';
import PostSubletForm from '../components/subcomponents/PostSubletForm';

import Register from '../components/Register';
import { store } from '../store';
import { push } from 'react-router-redux';
import {  showModal, hideModal } from './actions'

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
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal()),

});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }


  }
    constructor() {
        super();
        this.state = {
            showTheModal: false,
        }
    }
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
       console.log(this.props.isShowing);
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser}
            handler = {this.props.showModal}
          />
            <PostSubletForm onClose={this.props.hideModal} show={this.props.isShowing}/> }
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/feed" component={Feed} />

            <Route path="/register" component={Register} />
              <Route path="/exe" component={Property} />


            </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
          handler = {this.props.showModal}
        />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
