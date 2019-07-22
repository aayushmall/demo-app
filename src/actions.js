import { UPDATE_USERS, UPDATE_POSTS, SHOW_POST } from "./action_type";

const request = require("request");

export const getUsers = () => {
  return dispatch => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users"
    };
    request(options, (error, response, body) => {
      if (response && response.statusCode === 200) {
        let users = JSON.parse(body);
        users = users.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {});

        dispatch({ type: UPDATE_USERS, payload: { users } });
      } else {
        console.error("Something went wrong");
      }
    });
  };
};

export const getPosts = () => {
  return dispatch => {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    };
    request(options, (error, response, body) => {
      if (response && response.statusCode === 200) {
        let posts = JSON.parse(body);
        dispatch({ type: UPDATE_POSTS, payload: { posts } });
      } else {
        console.error("Something went wrong");
      }
    });
  };
};

export const showPost = post => {
  return dispatch => {
    dispatch({ type: SHOW_POST, payload: { post } });
  };
};
