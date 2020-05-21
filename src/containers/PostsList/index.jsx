import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import styled, { css } from "styled-components"
import { getPosts } from "../../redux/actions"

const Title = styled.h3`
  background-color: #acacac;
  margin: 30px;
  font-size: 15px;
  padding: 15px;
`

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
    <div>
      {postsListError ? (
        <p>Post Error</p>
      ) : (
        <>
          {postsList.map((item) => (
            <>
              <Title>{item.title}</Title>
              <p>{item.body}</p>
            </>
          ))}
        </>
      )}
    </div>
  )
}

export default PostsList
