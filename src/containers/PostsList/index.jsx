import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { v1 as uuidv1 } from "uuid"
import { getPosts } from "../../redux/actions"
import { MainContainer, Loader, AddButton, ErrorBlock } from "../../AppStyled"

import Post from "../../components/Post"

const PostsList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const { postsList, postsListError, postsListLoad } = useSelector((store) => {
    return {
      postsList: store.postsList,
      postsListLoad: store.postsListLoad,
      postsListError: store.postsListError,
    }
  })

  const renderItems = (error, load, list) => {
    if (load) {
      return <Loader />
    }
    if (error) {
      return <ErrorBlock>Error</ErrorBlock>
    }
    return (
      <>
        {list.map(({ title, body, id }) => (
          <Link to={`/posts/${id}`} key={uuidv1()} style={{ width: "100%" }}>
            <Post title={title} body={body} pushable />
          </Link>
        ))}
      </>
    )
  }

  return (
    <MainContainer>
      {renderItems(postsListError, postsListLoad, postsList)}
      <AddButton>
        <Link to="/posts/new">+</Link>
      </AddButton>
    </MainContainer>
  )
}

export default PostsList
