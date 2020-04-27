import { Layout } from 'antd';
import BlogMeta from './BlogMeta';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

const { Content } = Layout;

const BlogLayout = ({ children }) => {
  return (
    <Layout>
      <BlogMeta />
      <BlogHeader />
      <Content style={{ padding: '64px 50px 0' }}>
        <div className="siteLayout">{children}</div>
      </Content>
      <BlogFooter />
      <style jsx>{`
        .siteLayout {
          background: #fff;
          padding: 24px;
          min-height: 280px;
        }
      `}</style>
    </Layout>
  );
};

export default BlogLayout;
