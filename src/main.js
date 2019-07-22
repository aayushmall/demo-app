import React, { Component } from "react";
import { connect } from "react-redux";
import PostDetail from "./views/postDetail";
import HomePage from "./views/homepage";

class MainComponent extends Component {
  render() {
    return (
      <>
        {this.props.post && Object.keys(this.props.post).length > 0 ? (
          <PostDetail />
        ) : (
          <HomePage />
        )}
      </>
    );
  }
}

const mapActionToProps = {};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(
  mapStateToProps,
  mapActionToProps
)(MainComponent);
