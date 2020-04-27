import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

const BlogHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Link href="/">
        <a>
          <div className="logo" />
        </a>
      </Link>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      <style jsx>{`
        .logo {
          width: 120px;
          height: 31px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px 24px 16px 0;
          float: left;
        }
      `}</style>
    </Header>
  );
};

export default BlogHeader;
