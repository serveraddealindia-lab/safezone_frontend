import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu, Button, message } from 'antd';
import {
  DashboardOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  GlobalOutlined,
  ToolOutlined,
  PictureOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { removeToken } from '../lib/auth';

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: '/admin/dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '/admin/products', icon: <ShoppingOutlined />, label: 'Products' },
  { key: '/admin/categories', icon: <AppstoreOutlined />, label: 'Categories' },
  { key: '/admin/markets', icon: <GlobalOutlined />, label: 'Markets' },
  { key: '/admin/services', icon: <ToolOutlined />, label: 'Services' },
  { key: '/admin/banners', icon: <PictureOutlined />, label: 'Banners' },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    removeToken();
    message.success('Logged out successfully');
    router.push('/admin/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        theme="dark"
      >
        <div style={{ 
          height: 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold'
        }}>
          {collapsed ? 'FS' : 'Fire Safety'}
        </div>
        <Menu
          theme="dark"
          selectedKeys={[router.pathname]}
          mode="inline"
          items={menuItems}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          background: '#fff', 
          padding: '0 24px', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ margin: 0 }}>Admin Panel</h2>
          <Button 
            type="primary" 
            danger 
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

