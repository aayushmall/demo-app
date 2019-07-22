import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getPosts, showPost } from "../actions";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.props.getUsers();
    this.props.getPosts();
  }

  showPostDetail = post => {
    this.props.showPost(post);
  };

  render() {
    return (
      <>
        <h1>All Posts</h1>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th className="text-center">Id</th>
              <th className="text-center">Title</th>
              <th className="text-center">Posted By</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => {
              return (
                <PostRow
                  key={`${post.id}post`}
                  post={post}
                  postedBy={
                    this.props.users[post.userId]
                      ? this.props.users[post.userId].name
                      : ""
                  }
                  showPostDetail={this.showPostDetail}
                />
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapActionToProps = { getUsers, getPosts, showPost };
const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts
});
export default connect(
  mapStateToProps,
  mapActionToProps
)(HomePage);

const PostRow = props => {
  return (
    <tr>
      <td
        className="cursor-pointer"
        onClick={() => props.showPostDetail(props.post)}
      >
        {props.post.id}
      </td>
      <td>{props.post.title}</td>
      <td>{props.postedBy}</td>
    </tr>
  );
};
