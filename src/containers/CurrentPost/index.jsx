import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentPost } from "../../redux/actions"

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
    <div>
      {currentPostError ? (
        <p>Error</p>
      ) : (
        <>
          <p>{title}</p>
          <p>{body}</p>
        </>
      )}
    </div>
  )
}

CurrentPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
}

export default CurrentPost
