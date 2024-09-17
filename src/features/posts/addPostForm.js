import React, { useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectAllUsers } from "../users/userSlice";
import "./addPostForm.css";

const AddPostForm = () => {
  const dispatch = useDispatch();
  // toast.configure();

  const users = useSelector(selectAllUsers);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSaveBlogPost = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    } else {
      toast.error("Title or Content must be empty!");
    }
  };

  const usersOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <h3>Add a New Post</h3>
      <form className="container">
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          onChange={onTitleChange}
          value={title}
        ></input>
        <label htmlFor="postAuthor">Author</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange={onContentChange}
          value={content}
        ></textarea>
        <button type="button" onClick={onSaveBlogPost} disabled={!canSave}>
          Save Post
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default AddPostForm;
