import { Layout } from 'antd';

const { Footer } = Layout;

const BlogFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Ryker&apos;s Blog ©{new Date().getFullYear()} Created by Ryker Tyler
    </Footer>
  );
};

export default BlogFooter;
