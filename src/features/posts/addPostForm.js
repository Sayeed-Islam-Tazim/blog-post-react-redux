import React, { useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostForm = () => {
  const dispatch = useDispatch();
  // toast.configure();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSaveBlogPost = () => {
    if (title && content) {
      dispatch(addPost(title, content));
      setTitle("");
      setContent("");
    } else {
      toast.error("Title or Content must be empty!");
    }
  };

  return (
    <section>
      <h3>Add a New Post</h3>
      <form>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          onChange={onTitleChange}
          value={title}
        ></input>
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange={onContentChange}
          value={content}
        ></textarea>
        <button type="button" onClick={onSaveBlogPost}>
          Save Post
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default AddPostForm;
