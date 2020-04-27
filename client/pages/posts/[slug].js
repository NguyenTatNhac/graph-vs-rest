import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import BlogLayout from '../../components/BlogLayout';

const Post = (props) => {
  const router = useRouter();

  const tui = { props };

  return (
    <BlogLayout>
      <Head>
        <title>View a post</title>
      </Head>
      <h1>Hello World, welcome to {router.query.slug}</h1>
      <p>{tui.val}</p>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </BlogLayout>
  );
};

Post.getInitialProps = () => {
  return {
    tui: {
      val: 'Hi this is tui',
    },
  };
};

export default Post;
