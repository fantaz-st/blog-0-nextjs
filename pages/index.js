import Head from 'next/head';

import Hero from '../components/homepage/Hero';
import FeaturedPosts from '../components/homepage/FeaturedPosts';

import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>FANTAZ's blog</title>
        <meta name="description" content="I post about programming and web developing" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 360,
  };
};
