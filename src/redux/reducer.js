import ACTION_TYPE from "./constants"

const {
  POSTS_RESIVED_SUCCESSFUL,
  POSTS_RESIVED_ERROR,
  CURRENT_POST_RESIVED_SUCCESSFUL,
  CURRENT_POST_RESIVED_ERROR,
  POSTS_RESIVED,
  CURRENT_POST_RESIVED,
  CREATE_POST,
  CREATE_POST_SUCCESSFUL,
  CREATE_POST_ERROR,
  RESET_CREATE_POST,
} = ACTION_TYPE

const initialState = {
  postsList: [],
  postsListLoad: false,
  postsListError: false,

  currentPost: {},
  currentPostLoad: false,
  currentPostError: false,

  createdPostLoader: false,
  createdPostError: false,
  createdPostSuccesfull: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_RESIVED:
      return {
        ...state,
        postsListLoad: true,
      }

    case POSTS_RESIVED_SUCCESSFUL:
      return {
        ...state,
        postsList: action.payload,
        postsListError: false,
        postsListLoad: false,
      }
    case POSTS_RESIVED_ERROR:
      return {
        ...state,
        postsList: [],
        postsListError: true,
        postsListLoad: false,
      }
    case CURRENT_POST_RESIVED:
      return {
        ...state,
        currentPostLoad: true,
      }

    case CURRENT_POST_RESIVED_SUCCESSFUL:
      return {
        ...state,
        currentPost: action.payload,
        currentPostError: false,
        currentPostLoad: false,
      }
    case CURRENT_POST_RESIVED_ERROR:
      return {
        ...state,
        currentPost: {},
        currentPostError: true,
        currentPostLoad: false,
      }
    case CREATE_POST:
      return {
        ...state,
        createdPostLoader: true,
        createdPostError: false,
      }
    case CREATE_POST_SUCCESSFUL:
      return {
        ...state,
        createdPostLoader: false,
        createdPostError: false,
        createdPostSuccesfull: true,
      }
    case CREATE_POST_ERROR:
      return {
        ...state,
        createdPostLoader: false,
        createdPostError: true,
        createdPostSuccesfull: false,
      }
    case RESET_CREATE_POST:
      return {
        ...state,
        createdPostLoader: false,
        createdPostError: false,
        createdPostSuccesfull: false
      }
    default:
      return state
  }
}
