import React from "react"
import PropTypes from "prop-types"
import { CommentsBody, CommentsContainer } from "../AppStyled"

const Comments = ({ body }) => {
  return (
    <CommentsContainer>
      <CommentsBody>{body}</CommentsBody>
    </CommentsContainer>
  )
}

Comments.propTypes = {
  body: PropTypes.string.isRequired,
}

export default Comments
