import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import './home.css';

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="backgroundCover">

        <div className="container page">
          <div className="row">

          <div className="col-sm-3">
          </div>

          <div className="col-sm-6">
              <h3 className="headerText"> Find your new place </h3>
                <h4 className="subHeaderText"> Find your new place </h4>

              <input type="text" className="form-control" placeholder="Search for."/>

          </div>

            <div className="col-sm-3">
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
