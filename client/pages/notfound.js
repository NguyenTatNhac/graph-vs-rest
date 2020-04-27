import Error from 'next/error';
import Head from 'next/head';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Oops, something went wrong!</title>
      </Head>
      <Error statusCode={404} />
    </Layout>
  );
};
