import React from "react"
import PropTypes from "prop-types"
import { PostContainer, TextInput, TextArea, Button } from "../AppStyled"

const CreatePostForm = ({
  onChangeInputValue,
  formState: { titleInputValue, bodyInputValue },
  sendRequest,
}) => {
  return (
    <PostContainer>
      <TextInput
        value={titleInputValue}
        onChange={(e) => onChangeInputValue(e.target.value, "titleInputValue")}
        placeholder="Enter title"
      />
      <TextArea
        value={bodyInputValue}
        onChange={(e) => onChangeInputValue(e.target.value, "bodyInputValue")}
        placeholder="Enter text"
      />
      <Button onClick={sendRequest}>Send</Button>
    </PostContainer>
  )
}

CreatePostForm.propTypes = {
  onChangeInputValue: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    titleInputValue: PropTypes.string.isRequired,
    bodyInputValue: PropTypes.string.isRequired,
  }).isRequired,
  sendRequest: PropTypes.func.isRequired,
}

export default CreatePostForm
