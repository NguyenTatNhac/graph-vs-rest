import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Login to Ryker&apos;s blog</title>
      </Head>
      <h1>Hello World, welcome to login page</h1>
      <h2>
        <Link href="/">
          <a>Go To Home</a>
        </Link>
      </h2>
    </Layout>
  );
};
