import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import { getPosts, getCurrentPost } from "./redux/actions"

const PostList = () => <div>PostList</div>
const NewPost = () => <div>NewPost</div>
const CurrentPost = () => <div>CurrentPost</div>

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
    dispatch(getCurrentPost(39))
  })

  return (
    <div className="App">
      <Route path="/" component={PostList} />
      <Route exact path="/posts/new" component={NewPost} />
      <Route path="/posts/:postId(\d+)" component={CurrentPost} />
    </div>
  )
}

export default App
