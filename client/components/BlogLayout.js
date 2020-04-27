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
      <Content className="site-layout" style={{ paddingTop: 64 }}>
        <div className="site-layout-background">{children}</div>
      </Content>
      <BlogFooter />
    </Layout>
  );
};

export default BlogLayout;
