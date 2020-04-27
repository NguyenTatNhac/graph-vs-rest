import Link from 'next/link';
import Head from 'next/head';
import BlogLayout from '../components/BlogLayout';

const LoginPage = () => {
  return (
    <BlogLayout>
      <Head>
        <title>Login to Ryker&apos;s blog</title>
      </Head>
      <h1>Hello World, welcome to login page</h1>
      <h2>
        <Link href="/">
          <a>Go To Home</a>
        </Link>
      </h2>
    </BlogLayout>
  );
};

export default LoginPage;
