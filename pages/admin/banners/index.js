import { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, Form, Input, InputNumber, message, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '../../../components/AdminLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { bannersAPI } from '../../../lib/api';

export default function BannersPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await bannersAPI.getAll();
      setData(response.data);
    } catch (error) {
      message.error('Failed to fetch banners');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setEditingRecord(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await bannersAPI.delete(id);
      message.success('Banner deleted successfully');
      fetchData();
    } catch (error) {
      message.error('Failed to delete banner');
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (editingRecord) {
        await bannersAPI.update(editingRecord.id, values);
        message.success('Banner updated successfully');
      } else {
        await bannersAPI.create(values);
        message.success('Banner created successfully');
      }
      setModalVisible(false);
      form.resetFields();
      fetchData();
    } catch (error) {
      message.error(error.response?.data?.error || 'Operation failed');
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 80 },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Image', dataIndex: 'image', key: 'image', render: (text) => text || '-' },
    { 
      title: 'Order', 
      dataIndex: 'order_no', 
      key: 'order_no',
      sorter: (a, b) => (a.order_no || 0) - (b.order_no || 0),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this banner?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              size="small"
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
          <h1>Banners</h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
          >
            Add Banner
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
        <Modal
          title={editingRecord ? 'Edit Banner' : 'Add Banner'}
          open={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            form.resetFields();
          }}
          onOk={() => form.submit()}
          width={600}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter banner title' }]}
            >
              <Input placeholder="Banner title" />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <Input placeholder="Image URL" />
            </Form.Item>
            <Form.Item name="order_no" label="Order Number">
              <InputNumber min={0} placeholder="Order number" style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        </Modal>
      </AdminLayout>
    </ProtectedRoute>
  );
}

