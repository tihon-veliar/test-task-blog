import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { v1 as uuidv1 } from "uuid"

import Post from "../../components/Post"
import Comments from "../../components/Comments"

import { getCurrentPost } from "../../redux/actions"
import { OverlayConteiner, CloseBtn, Loader, Conteiner, ErrorBlock } from "../../AppStyled"
import useLockBodyScroll from "../../utils/useLockBodyScroll"

const CurrentPost = ({
  match: {
    params: { postId = null },
  },
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentPost(postId))
  }, [dispatch, postId])
  useLockBodyScroll()
  const { currentPost, currentPostError, currentPostLoad } = useSelector(
    (store) => {
      return {
        currentPost: store.currentPost,
        currentPostError: store.currentPostError,
        currentPostLoad: store.currentPostLoad,
      }
    }
  )

  const renderItems = (error, load, { title, body, comments }) => {
    if (load) {
      return <Loader />
    }
    if (error) {
      return <ErrorBlock>ERROR</ErrorBlock>
    }
    return (
      <>
        <Link to="/">
          <CloseBtn>X</CloseBtn>
        </Link>
        <Post title={title} body={body} fulWidth={true}/>
        {comments &&
          comments.map((comment) => (
            <Comments body={comment.body} key={uuidv1()} />
          ))}
      </>
    )
  }

  return (
    <OverlayConteiner>
      <Conteiner>
        {renderItems(currentPostError, currentPostLoad, currentPost)}
      </Conteiner>
    </OverlayConteiner>
  )
}

CurrentPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
}

export default CurrentPost
