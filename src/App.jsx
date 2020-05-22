import React from "react"
import { Route } from "react-router-dom"

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
