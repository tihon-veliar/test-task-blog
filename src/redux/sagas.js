import { put, call, takeLatest } from "redux-saga/effects"
import axios from "axios"
import ACTION_TYPE from "./constants"

const {
  POSTS_RESIVED,
  POSTS_RESIVED_SUCCESSFUL,
  POSTS_RESIVED_ERROR,
  CURRENT_POST_RESIVED,
  CURRENT_POST_RESIVED_SUCCESSFUL,
  CURRENT_POST_RESIVED_ERROR,
  CREATE_POST,
  CREATE_POST_SUCCESSFUL,
  CREATE_POST_ERROR,
} = ACTION_TYPE

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const apiRoot = "https://simple-blog-api.crew.red"

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: "INCREMENT" })
}

function* fetchPosts(action) {
  try {
    const posts = yield call(axios.get, `${apiRoot}/posts`)
    yield put({ type: POSTS_RESIVED_SUCCESSFUL, payload: posts.data })
  } catch (error) {
    yield put({ type: POSTS_RESIVED_ERROR })
  }
}

function* fetchCurrentPost(action) {
  try {
    const post = yield call(
      axios.get,
      `${apiRoot}/posts/${action.payload.id}?_embed=comments`
    )
    yield put({ type: CURRENT_POST_RESIVED_SUCCESSFUL, payload: post.data })
  } catch (error) {
    yield put({ type: CURRENT_POST_RESIVED_ERROR })
  }
}

function* postPost(action) {
  try {
    const createPost = yield call(axios, {
      method: "post",
      url: `${apiRoot}/posts`,
      data: action.payload,
      headers: {
        "Content-Type": "application/json",
      },
    })
    yield put({ type: CREATE_POST_SUCCESSFUL })
    yield put({ type: POSTS_RESIVED })
  } catch (error) {
    yield put({ CREATE_POST_ERROR })
  }
}

export default function* rootSaga() {
  yield takeLatest(POSTS_RESIVED, fetchPosts)
  yield takeLatest(CURRENT_POST_RESIVED, fetchCurrentPost)
  yield takeLatest(CREATE_POST, postPost)
}
