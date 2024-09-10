import React from "react";
import "./App.css";
import PostList from "./features/posts/postList";
import AddPostForm from "./features/posts/addPostForm";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
