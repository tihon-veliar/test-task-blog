import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"

import Post from "../../components/Post"

import { getCurrentPost } from "../../redux/actions"
import { OverlayConteiner } from "../../AppStyled"

const CurrentPost = ({
  match: {
    params: { postId = null },
  },
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentPost(postId))
  }, [dispatch, postId])

  const {
    currentPost: { title = "", body = "", id = null, comments = [] },
    currentPostError,
  } = useSelector((store) => {
    return {
      currentPost: store.currentPost,
      currentPostError: store.currentPostError,
    }
  })

  return (
    <OverlayConteiner>
      {currentPostError ? <p>Error</p> : <Post title={title} body={body} />}
    </OverlayConteiner>
  )
}

CurrentPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
}

export default CurrentPost
