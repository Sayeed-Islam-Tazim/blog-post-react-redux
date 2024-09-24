import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from "react";
import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="author-design">
          - <PostAuthor userId={post.userId} />,
          <TimeAgo timeStamp={post.date} />
        </p>
      </article>
    );
  });

  return (
    <>
      <h2>Posts</h2>
      {renderedPosts}
    </>
  );
};

export default PostList;
