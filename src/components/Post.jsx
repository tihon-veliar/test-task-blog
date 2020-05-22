import React from "react"
import PropTypes from "prop-types"
import { PostContainer, PostTitle, PostBody } from "../AppStyled"

const Post = ({ title, body, pushable = false }) => {
  return (
    <PostContainer pushable={pushable}>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
    </PostContainer>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  pushable: PropTypes.bool,
}

export default Post
