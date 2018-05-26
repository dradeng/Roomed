import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const FeedView = props => {
  return (
    <div className="col-sm-12">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

          <YourFeedTab
            token={props.token}
            tab={props.tab}
            onTabClick={props.onTabClick} />

          <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />

          <TagFilterTab tag={props.tag} />

        </ul>
      </div>


    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedView);
