import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../actions";
const request = require("request");

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount = () => {
    const options = {
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${
        this.props.post.id
      }/comments`
    };

    request(options, (error, response, body) => {
      if (response && response.statusCode === 200) {
        let comments = JSON.parse(body);
        this.setState({ comments });
      } else {
        console.error("Something went wrong");
      }
    });
  };

  switchToHome = () => {
    this.props.showPost({});
  };

  render() {
    return (
      <>
        <div className="p-10  pull-left" onClick={() => this.switchToHome()}>
          <i className="glyphicon glyphicon-arrow-left cursor-pointer" />
          <button className="btn-link">Back</button>
        </div>
        <div className="container">
          <div className="content-div">
            <div className="row">
              <br />
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Title: {this.props.post.title}</b>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <i>
                      Posted By:{" "}
                      {this.props.users[this.props.post.userId]
                        ? this.props.users[this.props.post.userId].name
                        : ""}
                    </i>
                  </h6>
                  <p className="card-text">{this.props.post.body}</p>
                </div>
              </div>
              <div className="col-sm-12">
                <h4 className="text-left">User Comments</h4>
              </div>
            </div>
            {this.state.comments.map(comment => {
              return (
                <div className="row" key={`${comment.id}comments`}>
                  <div className="col-sm-1">
                    <div className="thumbnail">
                      <img
                        className="img-responsive user-photo"
                        src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="user-img"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <strong>{comment.email}</strong>{" "}
                        <span className="text-muted" />
                      </div>
                      <div className="panel-body">{comment.body}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapActionToProps = { showPost };
const mapStateToProps = state => ({
  post: state.post,
  users: state.users
});
export default connect(
  mapStateToProps,
  mapActionToProps
)(PostDetail);
