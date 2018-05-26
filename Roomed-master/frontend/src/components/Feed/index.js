import Property from './Property';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import './feed.css';

import {
  FEED_PAGE_LOADED,
  FEED_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.Feed,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
      dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
    onLoad: (tab, pager, payload) =>
      dispatch({ type: FEED_PAGE_LOADED, tab, pager, payload }),
    onUnload: () =>
      dispatch({  type: FEED_PAGE_UNLOADED })
});

class Feed extends React.Component {
  componentWillMount() {

  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="backgroundCover">
        <Property />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
