import React from 'react';
import classes from './PostsGrid.module.css';
import PostsItem from './PostsItem';

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostsItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
