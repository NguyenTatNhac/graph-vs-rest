import { Layout, Menu } from 'antd';

const { Header } = Layout;

const BlogHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default BlogHeader;
