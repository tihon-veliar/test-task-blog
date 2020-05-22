import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import styled from "styled-components"
import { v1 as uuidv1 } from "uuid"
import { getPosts } from "../../redux/actions"
import { MainContainer } from "../../AppStyled"

import Post from "../../components/Post"

const PostsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const { postsList, postsListError } = useSelector((store) => {
    return {
      postsList: store.postsList,
      postsListError: store.postsListError,
    }
  })

  return (
    <MainContainer>
      {postsListError ? (
        <p>Post Error</p>
      ) : (
        <>
          {postsList.map(({ title, body }) => (
            <Post key={uuidv1()} title={title} body={body} pushable />
          ))}
        </>
      )}
    </MainContainer>
  )
}

export default PostsList
