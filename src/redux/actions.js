import axios from "axios"
import ACTION_TYPE from "./constants"

const { POSTS_RESIVED, CURRENT_POST_RESIVED, CREATE_POST } = ACTION_TYPE

export function getPosts() {
  return { type: POSTS_RESIVED }
}

export function getCurrentPost(id) {
  return { type: CURRENT_POST_RESIVED, payload: { id } }
}
