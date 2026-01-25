import { Row, Col, Card, Statistic } from 'antd';
import {
  ShoppingOutlined,
  AppstoreOutlined,
  GlobalOutlined,
  ToolOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import AdminLayout from '../../components/AdminLayout';
import ProtectedRoute from '../../components/ProtectedRoute';

function Dashboard() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1 style={{ marginBottom: 24 }}>Dashboard</h1>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Products"
                value={0}
                prefix={<ShoppingOutlined />}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Categories"
                value={0}
                prefix={<AppstoreOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Markets"
                value={0}
                prefix={<GlobalOutlined />}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Services"
                value={0}
                prefix={<ToolOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Banners"
                value={0}
                prefix={<PictureOutlined />}
                valueStyle={{ color: '#fa8c16' }}
              />
            </Card>
          </Col>
        </Row>
      </AdminLayout>
    </ProtectedRoute>
  );
}

export default Dashboard;

