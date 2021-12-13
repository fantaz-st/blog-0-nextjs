import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostDetailPage;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
