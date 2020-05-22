import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import { createPost, resetCreatePost } from "../../redux/actions"

import {
  OverlayConteiner,
  Loader,
  CloseBtn,
  ErrorBlock,
  SccessfulBlock,
  Conteiner,
} from "../../AppStyled"
import CreatePostForm from "../../components/CreatePostForm"
import useLockBodyScroll from "../../utils/useLockBodyScroll"

const CreatePost = () => {
  const [formState, setFormState] = useState({
    titleInputValue: "",
    bodyInputValue: "",
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useLockBodyScroll()

  const onChangeInputValue = (value, inputName) => {
    const newState = { ...formState }
    newState[inputName] = value
    setFormState(newState)
  }
  const {
    createdPostLoader,
    createdPostError,
    createdPostSuccesfull,
  } = useSelector((store) => {
    return {
      createdPostLoader: store.createdPostLoader,
      createdPostError: store.createdPostError,
      createdPostSuccesfull: store.createdPostSuccesfull,
    }
  })
  const sendRequest = () => {
    if (formState.bodyInputValue.length && formState.titleInputValue.length) {
      dispatch(
        createPost({
          body: formState.bodyInputValue,
          title: formState.titleInputValue,
        })
      )
    }
  }

  useEffect(() => {
    if (createdPostSuccesfull || createdPostError) {
      setTimeout(() => {
        history.push("/")
        dispatch(resetCreatePost())
      }, 3000)
    }
  }, [createdPostSuccesfull, createdPostError, dispatch, history])

  const renderIdems = (load, error, succesfull) => {
    if (load) {
      return <Loader />
    }
    if (error) {
      return <ErrorBlock>ERROR</ErrorBlock>
    }

    if (succesfull) {
      return <SccessfulBlock>SENT</SccessfulBlock>
    }

    return (
      <>
        <Link to="/">
          <CloseBtn>X</CloseBtn>
        </Link>
        <CreatePostForm
          onChangeInputValue={onChangeInputValue}
          formState={formState}
          sendRequest={sendRequest}
        />
      </>
    )
  }
  return (
    <OverlayConteiner id="CreatePost">
      <Conteiner>
        {renderIdems(
          createdPostError,
          createdPostLoader,
          createdPostSuccesfull
        )}
      </Conteiner>
    </OverlayConteiner>
  )
}
export default CreatePost
