import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import { getPosts, getCurrentPost } from "./redux/actions"

import CreatePost from "./containers/CreatePost"
import CurrentPost from "./containers/CurrentPost"
import PostsList from "./containers/PostsList"

function App() {
  return (
    <div className="App">
      <Route path="/" component={PostsList} />
      <Route exact path="/posts/new" component={CreatePost} />
      <Route exact path="/posts/:postId(\d+)" component={CurrentPost} />
    </div>
  )
}

export default App
