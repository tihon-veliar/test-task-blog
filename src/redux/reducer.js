import ACTION_TYPE, { SCREENS } from "./constants"

const {
  POSTS_RESIVED_SUCCESSFUL,
  CURRENT_POST_RESIVED_SUCCESSFUL,
  CREATE_POST_SUCCESSFUL,
} = ACTION_TYPE

const initialState = {
  postsList: [],
  currentPost: {},
}
export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_RESIVED_SUCCESSFUL:
      return { ...state, postsList: action.payload }
    case CURRENT_POST_RESIVED_SUCCESSFUL:
      return { ...state, currentPost: action.payload }
    default:
      return state
  }
}
