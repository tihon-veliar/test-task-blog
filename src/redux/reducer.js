import ACTION_TYPE, { SCREENS } from "./constants"

const {
  POSTS_RESIVED_SUCCESSFUL,
  POSTS_RESIVED_ERROR,
  CURRENT_POST_RESIVED_SUCCESSFUL,
  CREATE_POST_SUCCESSFUL,
  CURRENT_POST_RESIVED_ERROR,
} = ACTION_TYPE

const initialState = {
  postsList: [],
  postsListError: false,
  currentPost: {},
  currentPostError: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_RESIVED_SUCCESSFUL:
      return { ...state, postsList: action.payload }
    case POSTS_RESIVED_ERROR:
      return { ...state, postsList: [], postsListError: false }
    case CURRENT_POST_RESIVED_SUCCESSFUL:
      return { ...state, currentPost: action.payload, currentPostError: false }
    case CURRENT_POST_RESIVED_ERROR:
      return { ...state, currentPost: {}, currentPostError: true }
    default:
      return state
  }
}
