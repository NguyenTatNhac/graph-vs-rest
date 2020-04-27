import Link from 'next/link';
import Head from 'next/head';
import BlogLayout from '../components/BlogLayout';

const HomePage = () => {
  return (
    <BlogLayout>
      <Head>
        <title>Ryker&apos;s blog</title>
      </Head>
      <img src="/images/avatar.jpg" alt="Me" />
      <h1>Hello World, welcome to Home Page</h1>
      <h2>
        <Link href="/notfound">
          <a>Go To Not Found</a>
        </Link>
      </h2>
      <h2>
        <Link href="/login">
          <a>Go To Login</a>
        </Link>
      </h2>
      <Link href="/posts/[slug]" as="/posts/hello-world">
        <a>Go To Post</a>
      </Link>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
      <h2>
        <a href="https://google.com">Go To Google</a>
      </h2>
    </BlogLayout>
  );
};

export default HomePage;
