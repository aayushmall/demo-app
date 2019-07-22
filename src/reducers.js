import { combineReducers } from "redux";
import { UPDATE_USERS, UPDATE_POSTS, SHOW_POST } from "./action_type";

export const allReducers = combineReducers({
  users: (state = {}, { type, payload }) => {
    switch (type) {
      case UPDATE_USERS:
        return payload.users;
      default:
        return state;
    }
  },

  posts: (state = [], { type, payload }) => {
    switch (type) {
      case UPDATE_POSTS:
        return payload.posts;
      default:
        return state;
    }
  },

  post: (state = {}, { type, payload }) => {
    switch (type) {
      case SHOW_POST:
        return payload.post;
      default:
        return state;
    }
  }
});
