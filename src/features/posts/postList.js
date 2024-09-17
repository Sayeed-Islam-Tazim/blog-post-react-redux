import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from "react";
import PostAuthor from "./postAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="">
          - <PostAuthor userId={post.userId} />
        </p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
