import Head from 'next/head';

import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All my posts</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostsPage;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    // revalidate: 360,
  };
};
