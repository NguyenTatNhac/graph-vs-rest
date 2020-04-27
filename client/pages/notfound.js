import Error from 'next/error';
import Link from 'next/link';
import BlogLayout from '../components/BlogLayout';

const NotFoundPage = () => {
  return (
    <BlogLayout>
      <Error statusCode={404} title="Oops, something went wrong!" />
      <Link href="/">
        <a>Home</a>
      </Link>
    </BlogLayout>
  );
};

export default NotFoundPage;
